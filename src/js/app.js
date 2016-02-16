require('../css/app.css');
Flake = require('./flake.js');

var App = function () {

	this.canvas = document.getElementById('stage');
	this.ctx = this.canvas.getContext('2d');
	this.FPS = 60;
	this.frame = 0;
	this.cloud = [];

	// cross browser fun!
	this.canvas.height = window.innerHeight;
	this.canvas.width = window.innerWidth;
	this.canvas.style.height = window.innerHeight + "px";
	this.canvas.style.width = window.innerWidth + "px";

	this.tick();
}

// refresh the stage
App.prototype.clear = function () {
	if (this.frame == 60) {this.frame = 0;} else {this.frame++;}
	this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); 

	this.cloud = this.cloud.filter(function(f){
		return (f.y < this.canvas.height && f.x < this.canvas.width && f.x > -10);
	}.bind(this));
}

// Draw debugging text
App.prototype.drawDebug = function() {
	var txt = this.cloud.length + " / " + this.frame;

	this.ctx.font = "24px courier";
	this.ctx.fillStyle = "red";
	this.ctx.fillText(txt, 2, 20);
}

// Trigger the flakes' actions
App.prototype.drawStorm = function () {
	this.cloud.forEach(function (f) {
		f.update();	
		this.ctx.fillStyle = "rgba(255, 255, 255, " + f.alpha +")";
		this.ctx.beginPath();
		this.ctx.arc(f.x, f.y, f.size, 0, 2 * Math.PI);
		this.ctx.fill();
	}, this);
}

// Make a new flake!
App.prototype.addFlake = function () {
	if ((this.frame % 10) === 0) {
		this.cloud.push(new Flake({}));
	}
}

// Each tick of the stage's clock
App.prototype.tick = function () {
	this.clear();
	//drawDebug();
	this.addFlake();
	this.drawStorm();
};



//------Loop it------------
var theApp = new App();
(theloop = function() {
	theApp.tick();
	window.setTimeout( theloop, (theApp.FPS / 1000) );
})();
//------Loop it------------

