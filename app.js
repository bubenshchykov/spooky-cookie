var express = require('express');
var app = express(express.logger());

app.get('/', function(req, res){
	var id = Math.floor((Math.random()*1000)+1);
	var script = "(function(){var gotcha=document.cookie.indexOf('spooky-cookie-"+id+"')!==-1;spookyCookie(gotcha);})();";
	res.cookie('spooky-cookie-'+id, 'love', { maxAge: 10000 });
	res.send(script);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});