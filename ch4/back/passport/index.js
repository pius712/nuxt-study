const passport = require('passport');
const { User } = require('../models');
const local = require('./local');
// 함수를 모듈로 만드는 이유 => 재사용성을 올려준다.
module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log('serialize', user.id);
    return done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    console.log('id', id);
    User.findOne({
      where: {
        id, // 여기서 id는 따로 지정안해준 primary key id임.
      },
    })
      .then(user => {
        console.log('deserialize', user);
        return done(null, user);
      })
      .catch(err => {
        console.error(err);
        return done(err);
      });
  });
  //   passport.deserializeUser(async (id, done) => {
  //     try {
  //       const user = await User.findOne({ where: { id } });
  //       return done(null, user);
  //       //   req.user, req.authenticated === true;
  //     } catch (err) {
  //       console.error(err);
  //       return done(err);
  //     }
  //   }); // 위랑 같은 코드
  local(); // local strategy 등록
};
