const router = require('express').Router();
const AbouTea = require('../../components/AboutTea');
const { Tea, Comment, User } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { user } = res.app.locals;
    const { id } = req.params;
    const tea = await Tea.findOne({where: {id}});
    const comments = await Comment.findAll({where: {teaID: id}, include: ( User)});
    console.log(comments[0]);
    res.send(res.renderComponent(AbouTea, {title: 'AbouTea', tea, comments, user}));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;