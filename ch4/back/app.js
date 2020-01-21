const express = require('express');
const cors = require('cors');

const db = require('./models');
const app = express();

db.sequelize.sync({ force: true });
// 뒤에 force 옵션을 붙이게 되면, 스키마 변경시 기존의 데이터가 싹 날아가고
// 새롭게 정의된 스키마가 생성된다. 개발환경에서만 사용.
const indexRouter = require('./routes');
const userRouter = require('./routes/user.js');

// app.use(cors()); 이 경우 모든 경우 다 허용.
app.use(cors('http:localhost:3000'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(8080, () => {
  console.log('8080 port listening');
});
