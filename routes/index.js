var express = require('express');
var router = express.Router();

var { WebClient } = require('@slack/client');
var token = "<Bot User OAuth Access Token>";
var web = new WebClient(token);

router.post('/slack', function(req, res, next) {
  // 疎通確認用
  res.send(req.body.challenge)
  // botの発言でないなら処理
  if (!req.body.event.bot_id) {
    console.log("a")
    console.log(req.body.event)
    web.chat.postMessage({
      as_user: true,
      channel: req.body.event.channel,
      text: req.body.event.text
    })
  }
  next;
});
//*/

module.exports = router;
