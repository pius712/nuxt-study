const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.send('ㅎㅇ');
});

module.exports = router;
