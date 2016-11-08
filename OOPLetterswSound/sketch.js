/* William Young
Professor Caitlin Morris
Assignment 11.3
*/

var Obs = [];
var mySamples = [];
var loopMode;
var decrease;
var increase;
var triggered;

function preload(){
	for(i=48; i<58; i++){
		mySamples[i] = loadSound(String("assets/"+char(i)+".mp3"));
	}
	for(i=65; i<91; i++){
		mySamples[i] = loadSound(String("assets/"+char(i)+".mp3"));
	}
}


function setup() {
	createCanvas(520, 520);
	decrease = 0;
	triggered = false;
	
	}


function draw() {
	background(0);
	increase = Obs.length*10;
	decrease += 0.2;

	if (increase-decrease>height){
		fill(150, 50, 50);
	}
	else{
		fill(80);
	}
	rect(0, height-increase+decrease, 520, increase-decrease);

	if(decrease < 0){
		decrease = 0;
	}
	if(decrease > increase){
		decrease = increase;
	}

	
	for (var i=0; i<Obs.length; i++){		
		fill(i, 50+5*i, 50+5*i);
		Obs[i].animate();
		Obs[i].display();
	}
}

function keyPressed(){
	var tempOb = new NewObject(mouseX, mouseY, random(-30,30)/10, random(0,30)/10, 30, key, 1);
	println(key.charCodeAt(0));
	mySamples[key.charCodeAt(0)].play();
	Obs.push(tempOb);

	if ((increase-decrease)>height && triggered == false){
		triggered = true;
		fill(100,300,300);
		var tempOb = new NewObject(mouseX, mouseY, random(-30,30)/10, random(0,30)/10, 60, "WOAH", 1);
		Obs.push(tempOb);
	}
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
		if (this.y > height-10 || this.y < 10){
			this.yV = -this.yV;
		}
	}

	this.display = function(){
		textSize(this.s);
		text(this.l, this.x, this.y);
	}
};