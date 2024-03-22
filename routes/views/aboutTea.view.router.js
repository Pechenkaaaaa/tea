const router = require('express').Router();
const AbouTea = require('../../components/AboutTea');
const { Tea, User } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { user } = res.app.locals;
    const { id } = req.params;
    const tea = await Tea.findOne({where: {id}});
    res.send(res.renderComponent(AbouTea, {title: 'AbouTea', tea, user}));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;