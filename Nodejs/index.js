var http = require('http');
var url = require('url');
var fs = require('fs')

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	if (page === '/index') {
		fs.readFile('index.html', function(err, file) {
			if (err) {
				res.writeHead(500);
				res.write('Error');
				res.end();
			}
			res.writeHead(200, {'Content-type':'text/html'});
			res.write(file, 'utf-8');
			res.end();
		})

	} else if (page === '/contact') {
		res.writeHead(200, {'Content-type':'text/html'});
		res.write('<h1> Contact </h1>');
		res.end();
	} else {
		res.writeHead(404, {'Content-type':'text/html'});
		res.write('<h1> Error </h1>');
		res.end();
	}
	

});

server.listen(3000);