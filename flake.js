var Flake = function (options) { 
	this.size = options.size || getRandomInt(2, 6);			// radius
	this.alpha = options.alpha || "." + getRandomInt(10, 99);	// color (alpha)
	this.angle = options.angle || getRandomInt(-2, 2);			// direction ( -1 / 0  / 1 )
	this.speed = options.speed || getRandomInt(1, 4);							// Y Speed
	this.x = getRandomInt(1, canvas.width);
	this.y = 0;	
};

Flake.prototype.update = function () {
	this.x += this.angle;
	this.y += this.speed;
	this.draw();
}

Flake.prototype.draw = function () {
	ctx.fillStyle = "rgba(255, 255, 255, " + this.alpha +")";
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.fill();
}