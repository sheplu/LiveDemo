var express = require('express');
var router = express.Router();
var User = require('../models/user');
var verify = require('./verify');

router.all('/qwerty', verify.verifyLogged,function(req, res, next) {
	console.log(req.decoded); 
	if (req.decoded._doc.username === 'Legend') {
		next();
	} else {
		res.json('Unauthorized');
	}
})

router.post('/', function(req, res, next) {
	var user = new User({
		username : req.body.username,
		firstname : req.body.firstname,
		lastname : req.body.lastname,
		mail : req.body.mail,
		password : req.body.password
	});
	user.save(function(err, user) {
		if (err) {
			res.json(err);
		} else {
			res.json(user);
		}
	});
});

router.get('/', function(req, res, next) {
	User.find({}, function(err, users){
		if(err) {
			res.json(err);
		} else {
			res.json(users);
		}

	})
});

router.get('/:field/:value', function(req, res, next) {
	User.findOne({[req.params.field] : req.params.value}, function(err, users){
		if(err) {
			res.json(err);
		} else {
			res.json(users);
		}

	})
});

router.delete('/:field/:value', function(req, res, next) {
	User.findOneAndRemove({[req.params.field] : req.params.value}, function(err, users){
		if(err) {
			res.json(err);
		} else {
			res.json(users);
		}

	})
});

router.put('/:field/:value', function(req, res, next) {
	console.dir(req.params, {colors: true});
	User.findOneAndUpdate(
		{
			[req.params.field] : req.params.value
		}, {
			$set: req.body
		}, {
			new: true
		}, function(err, users){
		if(err) {
			res.json(err);
		} else {
			res.json({
				code:'200',
				data: users
			});
		}

	})
});

module.exports = router;
