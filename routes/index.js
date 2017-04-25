var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var domain = req.headers.host,
      subDomain = domain.split('.');
  if(subDomain[0].length == 0){
    subDomain = "This guy";
  }
  res.render('index', { subDomain: subDomain });
});

module.exports = router;
