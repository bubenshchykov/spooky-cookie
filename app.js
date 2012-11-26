var app = require('express')();
var port = process.env.PORT || 8090;

app.get('/', function(req, res, next){
	var id = Math.floor((Math.random()*1000)+1);
	var script = "(function(){var gotcha=document.cookie.indexOf('spooky-cookie-"+id+"')!==-1;spookyCookie(gotcha);})();";
	res.cookie('spooky-cookie-'+id, 'love', { maxAge: 10000 });
	res.send(script);
});

app.listen(port);
console.log('listening on port: ' + port);