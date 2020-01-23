const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { User } = require('../models');
const passport = require('passport');

app.post('/', async (req, res, next) => {
  try {
    // console.log(req.body);
    const hash = await bcrypt.hash(req.body.password, 12);
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (exUser) {
      // status에는 http code이고,
      // json 뒤에 객체는 front와 약속하는 데이터 형태
      return res.status(400).json({
        // 여기서 응답을 보낼때, return 하지 않으면 아래에 코드가 계속 실행된다.
        errorCode: 1, // 그래서 오류가 발생한다. send하는 경우에는 return
        message: '이미 회원가입되어있습니다',
      });
    }
    const newUser = await User.create({
      email: req.body.email,
      password: hash,
      nickname: req.body.nickname,
    });
    passport.authenticate('local', (err, user, info) => {
      // console.log('passport');
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, async err => {
        //세션에다 사용자 정보 저장 ( how? sereilizeUser )
        if (err) {
          console.error(err);
          return next(err);
        }
        // return res.json(user);
      });
    })(req, res, next);
    return res.status(201).json(newUser);
    //newUser은 Model인데, 이 Model은 js 객체의 인스턴스이다. 따라서 json()함수를 사용해서 json으로 만들 수 있다.
  } catch (err) {
    console.error(err);
    next(err);
    // return res.status(500).json({});
    // 이러한 방식으로 실무에서는 에러를 처리하기도 한다. 하지만 에러가 최대한
    // 안나도록 위에서 처리해야함.
  }
});

// app.post('/user/login', (req, res) => {
//   req.body.email;
//   req.body.password;
// });
app.post('/login', (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log('err');
      console.error(err);
      return next(err);
    }
    if (info) {
      console.log(info);
      return res.status(401).send(info.reason);
    }
    return req.login(user, async err => {
      //세션에다 사용자 정보 저장 ( how? sereilizeUser )
      if (err) {
        console.error(err);
        return next(err);
      }
      return res.json(user);
    }); // req.login ?! --> 원래 있는게 아니라 passport.initialize()을 하면 req.login/ req.logout 추가해준다.
  })(req, res, next);
}); //authenticate(strategy, options)
// local strategy 실행 --> return done() 이게 뒤에 콜백 인자로 들어온다.

app.post('/logout', (req, res) => {
  console.log(req.user);
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    req.logout();
    // req.session.destroy(); 선택사항
    return res.status(200).send('로그아웃 되었습니다.');
  }
});
module.exports = app;
