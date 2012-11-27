spooky-cookie
=============

Service to detect 3rd-party cookies support.
<br>Running on heroku <code>limitless-wildwood-5406.herokuapp.com</code>, http and https.

usage
-------------

Page's head should have http/https detection script <code>&lt;script src="https://limitless-wildwood-5406.herokuapp.com"> &lt;/script></code>. Callback function should be defined <code>function spookyCookie(areSupported) {..}</code> - will receive <i>true</i> if 3rd party cookies are supported

example
-------------

When writing tests that need a real integration you need to do the following at the start of your test:
```javascript
(function detect(){
	var spookyCookieService = "limitless-wildwood-5406.herokuapp.com";
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