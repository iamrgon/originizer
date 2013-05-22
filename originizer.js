/**
 * Originizer.js
 * 
 * Simple IIFE that turns all a tag href's on the DOM into 
 * absolute links for your current host.
 * 
 * Useful, when loading content/JSON payloads from another domain, 
 * i.e., 3rd-party Solr indexes, copy-and-pasting content from another environment, etc
 * 
 * (c) 2013 Rafael Gonzaque <@iamrgon | rafaelgonzaque@gmail.com> 
 * Freely distributed under the MIT License.
 */
(function(w, d, $){
  var Originize = (function (w, d, $) {
  		// include jQuery if it's not already included
		if (!$) {
			var fjs = d.getElementsByTagName('script')[0],
				js = d.createElement('script');

			js.src = '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
			js.type = 'text/javascript';
			fjs.parentNode.insertBefore(js, fjs);

			$ = jQuery.noConflict();
		}

		// init these vars
		var currentOrigin = [w.location.protocol, '//', w.location.host, '/'].join(''),
			regExp = /^http(s)?\:\/\/.*(\.com)?(\:(\d)+)?\//;

		$('body a[href]').each(function (idx, el) {
			var $el = $(el),
				href = $el.attr('href'),
				matches = href.match(regExp);

			if (matches && matches.length) {
				var url = matches.shift();

				// if host is not equal, replace witb current host
				if (url !== currentOrigin) {
					$el.attr('href', href.replace(url, currentOrigin));
				}
			}
		});
	}).bind(this, w, d, $);

	// export fn to global scope
	w.Originize = Originize;
})(window, document, jQuery || undefined);
