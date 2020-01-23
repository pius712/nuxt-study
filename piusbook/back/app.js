const express = require('express');
const morgan = require('morgan');
const cookie = require('cookie-parser');
const session = require('express-session');
const { sequelize } = require('./models');

const app = express();
sequelize.sync();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

app.use(morgan);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie('secretcode'));
app.use(session());

app.use('/', indexRouter);
app.use('/', userRouter);

app.listen(8080, () => {
  console.log('8080 port listening');
});
