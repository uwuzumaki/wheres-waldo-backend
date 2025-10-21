import db from "../db/queries.js";

const picture = async (req, res) => {
  const map = await db.getMap();
  const pick = req.body.pick;
  const mapX = Math.round((req.body.x / req.body.width) * 100);
  const mapY = Math.round((req.body.y / req.body.height) * 100);
  const userX = map[`${pick}x`];
  const userY = map[`${pick}y`];
  const correctX = mapX - 3 <= userX && mapX + 3 >= userX;
  const correctY = mapY - 3 <= userY && mapY + 3 >= userY;
  const result = correctX && correctY;

  console.log(result);

  res.json({ pick, result });
};

export default { picture };
