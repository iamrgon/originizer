javascript:(function(){if(window.Originize){Originize();return;}(function(a,c,b){var e=(function(g,l,j){if(!j){var i=l.getElementsByTagName("script")[0],k=l.createElement("script");k.src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";k.type="text/javascript";i.parentNode.insertBefore(k,i);j=jQuery.noConflict()}var f=[g.location.protocol,"//",g.location.host,"/"].join(""),h=/^http(s)?\:\/\/.*(\.com)?(\:(\d)+)?\//;j("body a[href]").each(function(d,p){var o=j(p),m=o.attr("href"),q=m.match(h);if(q&&q.length){var n=q.shift();if(n!==f){o.attr("href",m.replace(n,f))}}})}).bind(this,a,c,b);window.Originize=e})(window,document,jQuery||undefined);Originize();});
