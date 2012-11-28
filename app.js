var express = require('express');
var app = express.createServer(express.logger());

app.use(express.cookieParser());

app.get('/', function(req, res){
	res.cookie('spooky-cookie', 'love', { maxAge: 10000, path:'/gotcha' });
	var info = req.headers['x-forwarded-proto'] + ',' + JSON.stringify(req.headers);
	res.redirect(root() + '/gotcha' + '/' + info);
	function root() {
		var protocol = (req.headers['x-forwarded-proto'] === "https") ? 'https' : 'http';
		return protocol + '://' + req.headers.host;
	}
});

app.get('/gotcha/:info', function(req, res){
	var gotCookie = req.cookies['spooky-cookie'] === 'love';
	var script = "spookyCookie("+gotCookie+");" + req.params.info;
	res.setHeader('Content-Type', 'application/javascript');	
	res.send(script);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});