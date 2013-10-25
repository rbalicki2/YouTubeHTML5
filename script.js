(function() {
	debug = false;

	function debugLog(logString) {

		if(debug) {
			console.log(logString);
		}
	}

	function replaceEmbed() {

		embed = document.getElementsByTagName('embed')
		if (embed.length > 0) {
			debugLog('not html5')
			ytcode = window.location.search.replace('?v=','').replace(/&.+/,'')
			iframe = document.createElement('iframe')
			iframe.src = "http://www.youtube.com/embed/" + ytcode + "?html5=1"
			iframe.width="100%"
			iframe.height="100%"

			embed[0].parentNode.replaceChild(iframe, embed[0]);
			debugLog('now it should be html5')
		} else {
			debugLog('already html5')	
		}

	}
	window.setInterval(replaceEmbed, 2000)
})();