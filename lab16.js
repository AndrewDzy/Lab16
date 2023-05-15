window.onload = function() {
	var images = document.getElementsByClassName('image');
	for(var i = 0; i < images.length; i++) {
		var image = images [i];
		image.onclick = function() {
			alert(this.src);
		};
	};
};