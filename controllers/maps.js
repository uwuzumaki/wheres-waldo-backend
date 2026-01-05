import db from "../db/queries.js";

const createMap = async (req, res) => {
  const body = req.body;
  const map = await db.createMap(
    "kanagawa",
    parseInt(74),
    parseInt(89),
    parseInt(64),
    parseInt(65),
    parseInt(17),
    parseInt(67),
    parseInt(3859),
    parseInt(2594)
  );
  console.log(map);
};

export default {
  createMap,
};
