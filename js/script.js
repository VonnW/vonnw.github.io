window.addEventListener("DOMContentLoaded", ()=>{
	clean(document.body);
	
	document.getElementById("smallnav").addEventListener("click", function() {
		document.getElementById("bignav").classList.toggle("shownav");
	});
});

// From sitepoint.com/removing-useless-nodes-from-the-dom/
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
