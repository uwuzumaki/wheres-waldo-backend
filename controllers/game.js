import db from "../db/queries.js";

const picture = async (req, res) => {
  const mapPick = req.params.picture == "a" ? "kanagawa" : null;
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
    return res.json({ pick, result, status });
  }
  return res.send("Already guessed!");
};

const createPlayer = async (req, res) => {
  const player = await db.createPlayer();
  res.json({ id: player.id, createAt: player.createAt });
};

export default { picture, createPlayer };
