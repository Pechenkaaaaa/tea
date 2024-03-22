const router = require("express").Router();
const { Tea } = require("../../db/models");

router.get("/", async (req, res) => {
  const teas = await Tea.findAll();
  res.json(teas)
});



router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
      const data = await Tea.destroy({ where: { id , userID: res.locals.user.id} })
      if (data >0){
          res.status(200).json({ message: "success", data })
      } else{
res.status(500).json({ message: "Не твоя вот и не можешь)))))"})
      }
      
  } catch (error) {
      res.json({ message: "Не твоя", error })
  }

})

module.exports = router;
