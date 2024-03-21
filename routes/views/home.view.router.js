const router = require('express').Router();
const Home = require('../../components/Home');

// Отрисовка HomePAge
router.get('/', async (req, res) => {
  try {
    // const { user } = res.app.locals;
    // const categories = await Category.findAll();
    res.send(res.renderComponent(Home, { title: 'HomePage'}));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;