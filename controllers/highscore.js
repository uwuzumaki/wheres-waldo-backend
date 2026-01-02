import db from "../db/queries.js";

const getHighScore = async (req, res) => {
  const highscore = await db.getHighScore(1);
  return res.json(highscore);
};

export default { getHighScore };
