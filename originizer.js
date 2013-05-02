/**
 * Originizer.js
 * 
 * Simple IIFE that turns all a tag href's on the DOM into 
 * absolute links for your current host.
 * 
 * Useful, when loading content/JSON payloads from another domain, 
 * i.e., 3rd-party Solr indexes, copy-and-pasting content from another environment, etc
 * 
 * @author Rafael Gonzaque <@iamrgon | rafaelgonzaque@gmail.com>
 */
(function(w, d, $){
  var Originize = (function (w, d, $) {
		if (!$) {
			var fjs = d.getElementsByTagName('script')[0],
				js = d.createElement('script');

			js.src = '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
			js.type = 'text/javascript';
			fjs.parentNode.insertBefore(js, fjs);

			$ = jQuery.noConflict();
		}

		var currentOrigin = [w.location.protocol, '//', w.location.host, '/'].join(''),
			regExp = /^http(s)?\:\/\/.*(\.com)?(\:(\d)+)?\//;

		$('body a[href]').each(function (idx, el) {
			var $el = $(el),
				href = $el.attr('href'),
				matches = href.match(regExp);

			if (matches && matches.length) {
				var url = matches.shift();

				if (url !== currentOrigin) {
					$el.attr('href', href.replace(url, currentOrigin));
				}
			}
		});
	}).bind(this, w, d, $);

	window.Originize = Originize;
})(window, document, jQuery || undefined);
