/* William Young
Professor Caitlin Morris
REPRESENTING ENTROPY
*/


var Balls = [];
var OtherBalls = [];
var count;

function setup() {
	createCanvas(500, 500);
	count = 0;
	for (var i=0; i<20; i++){
		for (var j=1; j<20; j++){
			Balls[count] = new CreateBall(50+0.1*i + 0.2*j, 5+0.1*i+15*j, 0.5+0.1*i, 5+0.1*j, 5, 5);
			OtherBalls[count] = new CreateBall(300+0.1*i+15*j, 300+0.1*i+15*j, 0.5+0.001*i*j, 1+0.0001*i*j, 5, 5);
			count += 1
		}
	}
	println(Balls[0]);
	println(count);
}

function draw() {
	background(0);
	textSize(148);
	fill(50);
	text("entropy", 0, 200);
	for (var i=0; i<count; i++){
			fill(0, 0.1*i, i);
			Balls[i].animate();
			Balls[i].display();
			fill(0, i, i);
			OtherBalls[i].animate();
			OtherBalls[i].display();
			println(count);
		
	}
}

function CreateBall(xVal, yVal, xVel, yVel, hei, wid){
	this.x = xVal;
	this.y = yVal;
	this.xV = xVel;
	this.yV = yVel;
	this.h = hei;
	this.w = wid;

	this.animate = function(){
		this.x += this.xV;
		this.y += this.yV;
		if (this.x > width-10 || this.x < 10){
			this.xV = -this.xV
		}
		if (this.y > height-10 || this.y < 10){
			this.yV = -this.yV
		}
	}

	this.display = function(){
		ellipse(this.x, this.y, this.h, this.w);
	}


};