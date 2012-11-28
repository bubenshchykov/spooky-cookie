spooky-cookie
=============

Service to detect 3rd-party cookies support.
<br>Running on heroku <code>spooky-cookie.herokuapp.com</code>, http and https.

usage
-------------

Page's head should have http/https detection script <code>&lt;script src="https://spooky-cookie.herokuapp.com"> &lt;/script></code>. Callback function should be defined <code>function spookyCookie(areSupported) {..}</code> - will receive <i>true</i> if 3rd party cookies are supported

example
-------------

Code injectes a feature-detection script and callback function what sets a feature-class like modernizer.
```javascript
(function detect(){
	var spookyCookieService = "spooky-cookie.herokuapp.com";
	window.spookyCookie = function(gotCookie){
		gotCookie && $('html').addClass('cookie-3rd-support');
		/* or your code */
	};
	var script = document.createElement('script');
	script.src = (('https:' == document.location.protocol) ? "https://" : "http://") + spookyCookieService;
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);
})();
```