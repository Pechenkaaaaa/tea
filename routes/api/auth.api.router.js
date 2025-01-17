const router = require('express').Router();
const bcrypt = require('bcrypt');
const generateTokens = require('../../utils/authUtils');
const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    let user;
    user = await User.findOne({ where: { email } });

    if (user) {
      res.status(200).json({ message: 'Пользователь с такими данными уже зарегистрирован' });
      return;
    }

    const hpassword = await bcrypt.hash(password, 10);

    const userInDb = await User.create({ name, email, password: hpassword, role });

    user = await User.findOne({
      where: { id: userInDb.id },
      attributes: ['name', 'id'],
    });
    if (user) {
      res.locals.user = user;
      const { accessToken, refreshToken } = generateTokens({ user });
      res
        .cookie('access', accessToken)
        .cookie('refresh', refreshToken)
        .status(201)
        .json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/authorization', async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;

    user = await User.findOne({
      where: { email },
      attributes: ['password', 'name', 'id', 'role'],
    });
    if (!user) {
      res.json({ message: 'Такого пользователя нет в системе, либо пароль неверный' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: 'Такого пользователя нет в системе, либо пароль неверный' });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({ user });

    // устанавливаем куки
    res
      .cookie('access', accessToken)
      .cookie('refresh', refreshToken)
      .status(201)
      .json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/logout', (req, res) => {
  try {
    res.locals.user = undefined;
    res.clearCookie('access').clearCookie('refresh');
    res.redirect('/');
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
