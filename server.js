var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	console.log(req.url.substr(1));
	var file = fs.readFileSync(req.url.substr(1));
	res.writeHead(200, {});
  res.end(file);
}).listen(3000);