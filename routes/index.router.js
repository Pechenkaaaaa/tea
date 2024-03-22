const router = require('express').Router();

// view
const homeViewRouter = require('./views/home.view.router');
const authViewRouter = require('./views/auth.view.router');
const aboutTeaViewRouter = require('./views/aboutTea.view.router');

// api
const authApiRouter = require('./api/auth.api.router');

// view router
router.use('/', homeViewRouter);
router.use('/auth', authViewRouter);
router.use('/tea', aboutTeaViewRouter);

// api router
router.use('/api/auth', authApiRouter);

module.exports = router;
