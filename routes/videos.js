var express = require('express');
var router = express.Router();



router.post('/', function (req, res, next) {
  res.send("nig");
})

module.exports = router;