window.addEventListener("DOMContentLoaded", function() {
	clean(document.body);
});

// From sitepoint.com/removing-useless-nodes-from-the-dom/
// I just fixed their awful formatting
function clean(node) {
	for (var n = 0; n < node.childNodes.length; n++) {
		var child = node.childNodes[n];
		
		if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
			node.removeChild(child);
			n--;
		} else if (child.nodeType === 1) {
			clean(child);
		}
	}
}
