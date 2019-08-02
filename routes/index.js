var express = require('express');
var router = express.Router();

router.post('/slack', function(req, res, next) {
  console.log("フックされました")
  res.send(req.body.challenge)
});

module.exports = router;
