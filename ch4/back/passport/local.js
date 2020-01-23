const passport = require('passport');
const bcrypt = require('bcrypt');
const db = require('../models');
const { Strategy: LocalStrategy } = require('passport-local');
// 비구조화 할당인데, Strategy를 LocalStrategy라는 이름으로 가지고 온다.
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', //req.body.email
        passwordField: 'password', // req.body.password
      },
      // 아래는 검사하는 로직
      async (email, password, done) => {
        try {
          console.log(email);
          const exUser = await db.User.findOne({ where: { email } });
          if (!exUser) {
            return done(null, false, { reson: '존재하지 않는 사용자입니다' });
            // done(에러, 성공, 실패);
          }
          const result = await bcrypt.compare(password, exUser.password);
          if (result) {
            return done(null, exUser);
          } else {
            return done(null, false, { reson: '비밀번호가 틀립니다.' });
          }
        } catch (err) {
          console.error(err);
          return done(err);
        }
      },
    ),
  );
};
