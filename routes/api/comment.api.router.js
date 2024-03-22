const router = require("express").Router();



const { Comment, User } = require("../../db/models");



const TeaItem = require("../../components/TeaItem");



// POST



router.post("/:id", async (req, res) => {

  try {

    const { id } = req.params;
    const { commentText } = req.body;
    
    const data = { commentText, userID: res.locals.user.id, teaID: Number(id) };
    
    const newComment = await Comment.create(data);
    
    const CommentUser = await Comment.findOne({where: { id: newComment.id }, include: User });



    // console.log("----", CommentUser, "----");



    if (CommentUser) {
      const html = res.renderComponent(TeaItem, { comment: CommentUser }, { doctype: false });

      res.status(201).json({ message: "success", html });

    }

  } catch ({ message }) {

    res.status(500).json({ error: message });

  }

});



module.exports = router;

