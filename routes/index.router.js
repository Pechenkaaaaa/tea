const fff = require('../components/FFF');
const router = require('express').Router();

// view
const homeViewRouter = require('./views/home.view.router');
const authViewRouter = require('./views/auth.view.router');

const aboutTeaViewRouter = require('./views/aboutTea.view.router');
const adminViewRouter = require('./views/adminPage.view.router');

// api
const authApiRouter = require('./api/auth.api.router');

const commentApiRouter = require('./api/comment.api.router');

const teaApiRouter = require('./api/tea.api.router');


// view router
router.use('/', homeViewRouter);
router.use('/auth', authViewRouter);
router.use('/tea', aboutTeaViewRouter);
router.use('/page',adminViewRouter);

// api router
router.use('/api/auth', authApiRouter);

router.use('/api/tea', commentApiRouter)

router.use('/teaPoint', teaApiRouter);

router.use('/*', (req, res)=>{
    res.send(res.renderComponent(fff));
})
module.exports = router;
