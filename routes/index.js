var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var domain = req.headers.host,
      domainArr = domain.split('.');
  res.render('index', { subDomain: domainArr[0] });
});

module.exports = router;
