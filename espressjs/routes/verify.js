var User = require('../models/user');
var jwt = require('jsonwebtoken');
var secret = 'wertyuk';

exports.getToken = function(user) {
	return jwt.sign(user, secret);
}

exports.verifyLogged = function(req, res, next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, secret, function(err, decoded) {
			if (err) {
				res.json('bad token');
			} else {
				req.decoded = decoded;
				next();
			}
		})
	} else {
		res.json('no token');
	}
}