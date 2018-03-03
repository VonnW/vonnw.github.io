window.addEventListener("DOMContentLoaded", function() {
	clean(document.body);
	
	document.getElementById("switchnav").addEventListener("click", function() {
		var bignav = document.getElementById("bignav");
		if (/shownav/i.test(bignav.className)) {
			bignav.className = /shownav/i.replace(bignav.className, "");
		} else {
			bignav.className = bignav.className + "shownav";
		}
	});
});

// From sitepoint.com/removing-useless-nodes-from-the-dom/
// I just fixed their awful formatting
// and made it not mess with syntax highlighting
function clean(node) {
	for (var n = 0; n < node.childNodes.length; n++) {
		var child = node.childNodes[n];
		
		if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
			node.removeChild(child);
			n--;
		} else if (child.nodeType === 1 && !/pre|code|blockquote/i.test(child.tagName)) {
			clean(child);
		}
	}
}
