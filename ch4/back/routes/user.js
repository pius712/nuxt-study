const express = require('express');
const { User } = require('../models');
const app = express();
const bcrypt = require('bcrypt');
app.post('/', async (req, res, next) => {
  try {
    // console.log(req.body);
    const hash = bcrypt.hash(req.password, 12);
    const exUser = await User.findOne({
      email: req.body.email,
    });
    if (exUser) {
      // status에는 http code이고,
      // json 뒤에 객체는 front와 약속하는 데이터 형태
      return res.status(400).json({
        errorCode: 1,
        message: '이미 회원가입되어있습니다',
      });
    }
    const newUser = await User.create({
      email: req.body.email,
      password: hash,
      nickname: req.body.nickname,
    });
    return res.status(201).json(newUser);
    //newUser은 Model인데, 이 Model은 js 객체의 인스턴스이다. 따라서 json()함수를 사용해서 json으로 만들 수 있다.
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = app;
