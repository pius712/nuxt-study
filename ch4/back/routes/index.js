const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('test test test');
});

module.exports = router;
