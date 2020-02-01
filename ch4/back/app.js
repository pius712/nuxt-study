const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie-parser');
const morgan = require('morgan');

const db = require('./models');
const passportConfig = require('./passport');
const app = express();

db.sequelize.sync({ force: true });
passportConfig();
// 뒤에 force 옵션을 붙이게 되면, 스키마 변경시 기존의 데이터가 싹 날아가고
// 새롭게 정의된 스키마가 생성된다. 개발환경에서만 사용.
// 만약 실제로 스키마를 변경하려면 마이그레이션에 대해 공부해야한다.
const indexRouter = require('./routes');
const userRouter = require('./routes/user.js');
const postRouter = require('./routes/post.js');

// app.use(cors()); 이 경우 모든 경우 다 허용.
app.use(morgan('dev'));
// app.use(cors('http:localhost:3000'));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie('cookiesecret'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'cookiesecret',
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.listen(8080, () => {
  console.log('8080 port listening');
});
