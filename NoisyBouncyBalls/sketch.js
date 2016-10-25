/* William Young
Professor Caitlin Morris
Assignment 10.25
Ball bounces around and makes a sound effect each time it hits a wall. Also changes color upon hitting sometimes.
*/
var mySample;
var loopMode;
var x;
var y;
var vx;
var vy;
var border;

function preload(){
	mySample = loadSound("assets/Jump.mp3");
}

function setup(){
	mySample.play();
	//frameRate = 50;
	x = 400;
	y = 250;
	border = 10;
	vx = random(3,6);
	vy = random(2,5);
	createCanvas(640, 480);
	
}


function draw(){
	background(0);
	push();
	fill(0, x/5, 100+y/10)
	rect(border, border, width-2*border, height-2*border)
	pop();
	//streakWidth = 0;
	ellipse(x, y, 40, 40);
	println(x, y, vx, vy);
	x += vx;
	y += vy;

	if(x > width-35 || x < 35){
		vx = -vx;
		fill(0, 100-x/3, 100-y/2+0.1*vx);
		mySample.play();
	}

	if(y > height-35 || y < 35){
		vy = -vy;
		fill(0, 100-x/3, 100-y/2+0.1*vy);
		ellipse(x, y, 40, 40);
		mySample.play();
	}

}
