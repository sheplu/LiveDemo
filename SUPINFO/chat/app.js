var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var messages = [{
	'username': 'Sheplu',
	'message' : 'Hello World'
}];

var server = http.createServer(function(req, res) {
	var path = url.parse(req.url).pathname;

	if (path === '/') {
		fs.readFile('./index.html', function(err, file) {
			if (err) {
				res.writeHead(500);
				res.end('Error');
			}
			else {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(file, 'utf-8');
			}
		})
	}
	else {
		res.writeHead(404, {'Content-Type' : 'text/html'});
		res.end('Not found');
	}
});

server.listen(3000);

io = io.listen(server);

io.sockets.on('connection', function(socket) {
	socket.emit('fetchMessages', messages);

	socket.on('newMessage', function(data) {
		messages.push(data);
		socket.broadcast.emit('fetchNewMessage', data);
	})
});