var imagecount = 1;
var total = 4;

function slide(x) {
	var Image = document.getElementById('img');
	var Extentsion = document.getElementById('extension');
	imagecount = imagecount + x;
	if (imagecount > total){
		imagecount = 1;
	}
	if (imagecount < 1){
		imagecount = total;
	}
	Image.src = "pictures/img" + imagecount +".jpg";
	Extentsion.href = "upcomingExtentsion/index" + imagecount +".html";
}

window.setInterval(function slideA() {
	var Image = document.getElementById('img');
	imagecount = imagecount + 1;
	if (imagecount > total){
		imagecount = 1;
	}
	if (imagecount < 1){
		imagecount = total;
	}
	Image.src = "pictures/img" + imagecount +".jpg";
	Extentsion.href = "upcomingExtentsion/index" + imagecount + ".html";
	},5000);