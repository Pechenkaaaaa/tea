require('@babel/register');

const express = require('express');
const indexRouter = require('./routes/index.router');
const serverConfig = require('./config/serverConfig');

const app = express();
serverConfig(app);

const PORT = process.env.PORT ?? 3000;

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Serever has been started at port: ${PORT}`));