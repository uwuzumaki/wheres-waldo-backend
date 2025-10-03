const picture = (req, res) => {
  console.log(req.body.x);
  console.log(req.body.y);
  console.log(req.body.pick);
  res.json({ x: req.body.x, y: req.body.y, pick: req.body.pick });
};

export default { picture };
