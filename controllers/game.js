import db from "../db/queries.js";

const picture = async (req, res) => {
  const mapPick = req.params.picture;
  const map = await db.getMap(mapPick);
  const gameSessionID = req.body.id;
  const gameSession = await db.gameSession(gameSessionID);
  const pick = req.body.pick;
  if (!gameSession.guessedObj.includes(pick)) {
    const mapX = Math.round((req.body.x / req.body.width) * 100);
    const mapY = Math.round((req.body.y / req.body.height) * 100);
    const userX = map[0][`${pick}x`];
    const userY = map[0][`${pick}y`];
    const correctX = mapX - 3 <= userX && mapX + 3 >= userX;
    const correctY = mapY - 3 <= userY && mapY + 3 >= userY;
    const result = correctX && correctY;
    result ? await db.addPick(gameSessionID, pick) : null;
    const gameOver = await db.gameSession(gameSessionID);
    const status = gameOver.guessedObj.length < 3 ? false : true;
    if (status) {
      const finishTime = new Date();
      const createAt = gameSession.createAt;
      const totalTime = finishTime - createAt;
      await db.finish(gameSessionID, finishTime, totalTime);
    }
    return res.json({ pick, result, status });
  }
  return res.send("Already guessed!");
};

const createPlayer = async (req, res) => {
  const map = await db.getMap(req.body.map);
  const player = await db.createPlayer(map[0].id);
  res.json({ id: player.id, createAt: player.createAt });
};

const gameOver = async (req, res) => {
  const gameSession = await db.gameSession(req.body.id);
  const map = gameSession.mapID;
  const topTen = await db.getHighScore(map);
  console.log("123");
  console.log(topTen);
  res.json(gameSession);
};

export default { picture, createPlayer, gameOver };
