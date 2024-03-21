const router = require('express').Router();
const AuthorizationPage = require('../../components/AuthorizationPage');
const RegistrationPage = require('../../components/RegistrationPage');

// страница регистрация
router.get('/registration', async (req, res) => {
  try {
    const html = res.renderComponent(RegistrationPage, { title: 'registration' });
    res.send(html);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// страница авторизации
router.get('/authorization', async (req, res) => {
  try {
    const html = res.renderComponent(AuthorizationPage, { title: 'authorization' });
    res.send(html);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
