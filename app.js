require('@babel/register');
const express = require('express');
require('dotenv').config();
const path = require('path');
const morgan = require('morgan');
const indexRouter = require('./routes/index.router');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Сервер шуршит на ${PORT}`);
});
