import db from "../db/queries.js";

const createMap = async (req, res) => {
  const body = req.body;
  const map = await db.createMap(
    "kanagawa",
    parseInt(body.x1),
    parseInt(body.y1),
    parseInt(body.x2),
    parseInt(body.y2),
    parseInt(body.x3),
    parseInt(body.y3),
    parseInt(body.originalx),
    parseInt(body.originaly)
  );
  console.log(map);
};

export default {
  createMap,
};
