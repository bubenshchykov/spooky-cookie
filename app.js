var express = require('express');
var app = express.createServer(express.logger());

app.use(express.cookieParser());

app.get('/', function(req, res){
	res.cookie('spooky-cookie', 'love', { maxAge: 10000, path:'/gotcha' });
	res.redirect(root() + '/gotcha');
	function root() {
		var protocol = (req.header('X-Forwaded-Proto') === 'https') ? 'https' : 'http';
		return protocol + '://' + req.headers.host;
	}
});

app.get('/gotcha', function(req, res){
	var gotCookie = req.cookies['spooky-cookie'] === 'love';
	var script = "spookyCookie("+gotCookie+");";
	res.setHeader('Content-Type', 'application/javascript');	
	res.send(script);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});