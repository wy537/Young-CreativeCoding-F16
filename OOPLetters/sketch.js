/* William Young
Professor Caitlin Morris
Assignment 11.1
*/

var Obs = [];
function setup() {
	createCanvas(520, 520);
	}


function draw() {
	background(0);
	for (var i=0; i<Obs.length; i++){
		fill(i, 50+5*i, 50+5*i);
		Obs[i].animate();
		Obs[i].display();
	}
}

function keyPressed(){
	var tempOb = new NewObject(mouseX, mouseY, random(0,30)/10, random(0,30)/10, 30, key, 1);
	Obs.push(tempOb);
}

function NewObject(xVal, yVal, xVel, yVel, size, letter, delta){
	this.x = xVal;
	this.y = yVal;
	this.xV = xVel;
	this.yV = yVel;
	this.s = size;
	this.l = letter;
	this.d = delta;

	this.animate = function(){
		this.s += this.d;
		if (this.s > 2*size || this.s < size){
			this.d = -this.d}
		this.x += this.xV;
		this.y += this.yV;
		if (this.x > width-40 || this.x < 40){
			this.xV = -this.xV
		}
		if (this.y > height-40 || this.y < 40){
			this.yV = -this.yV
		}
	}

	this.display = function(){
		textSize(this.s);
		text(this.l, this.x, this.y);
	}


};