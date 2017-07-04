var express = require('express');
var app = express();
var tests = require('./tests');
app.use('/tests', tests);

var router = express.Router();


