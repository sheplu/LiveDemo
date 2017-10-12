var express = require('express');
var router = express.Router();
var data = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/messages', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  res.json(data);
});

router.get('/reset', function(req, res, next) {
  data = [];
  res.json('done');
});

router.post('/messages', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  var message = {
    'pseudo' : req.body.pseudo,
    'message' : req.body.message
  };
  data.push(message);
  res.json(message);
});

module.exports = router;
