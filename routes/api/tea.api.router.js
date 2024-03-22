const router = require("express").Router();
const { Tea } = require("../../db/models");

router.get("/", async (req, res) => {
  const teas = await Tea.findAll();
  res.json(teas)
});

module.exports = router;
