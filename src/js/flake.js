var Flake = function (options) {
  this.size = options.size || this.getRandomInt(2, 6);			// radius
  this.alpha = options.alpha || "." + this.getRandomInt(10, 99);	// color (alpha)
  this.angle = options.angle || this.getRandomInt(-2, 2);			// direction ( -1 / 0  / 1 )
  this.speed = options.speed || this.getRandomInt(1, 4);			// Y Speed
  this.x = this.getRandomInt(1, window.innerWidth);
  this.y = 0;
};

Flake.prototype.update = function () {
  this.x += this.angle;
  this.y += this.speed;
};

// I stole this from the internets!
Flake.prototype.getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; 

module.exports = Flake;
