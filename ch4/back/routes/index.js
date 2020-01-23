const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('user', req.user);
  console.log('session', req.session);
  res.send('test test test');
});

module.exports = router;
