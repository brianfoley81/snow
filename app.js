var canvas = document.getElementById('stage');
var ctx = canvas.getContext('2d');
var FPS = 60;
var frame = 0;
var cloud = [];

// cross browser fun!
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.height = window.innerHeight + "px";
canvas.style.width = window.innerWidth + "px";

// refresh the stage
var clear = function () {
	if (frame == 60) {frame = 0;} else {frame++;}
	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	ctx.fillRect(0, 0, canvas.width, canvas.height); 

	// remove flakes that have gone off screen
	cloud = cloud.filter(function(f){
		return (f.y < canvas.height && f.x < canvas.width && f.x > -10);
	});
}

// Draw debugging text
var drawDebug = function() {
	var txt = cloud.length + " / " + frame;

	ctx.font = "24px courier";
	ctx.fillStyle = "red";
	ctx.fillText(txt, 2, 20);
}

var drawStorm = function () {
	cloud.forEach(function (f) {
		f.update();	
	});
}

var addFlake = function () {
	if ((frame % 10) === 0) {
		cloud.push(new Flake({}));
	}
}




var tick = function () {
	clear();
	//drawDebug();
	addFlake();
	drawStorm();
	setTimeout(tick, FPS / 1000);
};



//I stole this from the internets!
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};