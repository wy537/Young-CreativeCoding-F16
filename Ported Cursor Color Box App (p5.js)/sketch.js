/* William Young
Professor Caitlin Morris
27 Sep, 2016
First p5.js task: port processing app across. App lights up colors
in segments under cursor except for at x = 500. */

var height
var width
var border

function setup() {
	height = 500;
	width = 600;
	border = 10;

	createCanvas(width, height);
	background(255);
	
}

function draw() {
	
	if (mouseX < width/2 - border && mouseY < height/3 - border){
		fill(0, 0, 200)
		rect(0, 0, width/2, height/3)}
	else if 
		(mouseX < width/2 - border && mouseY > height/3 + border){
		fill(0, 200, 0)
		rect(0, height/3, width/2, height)}
	else if 
		(mouseX > width/2 + border && mouseX != 500){
		fill(200, 0, 0)
		rect(width/2, 0, width, height)}
	else
		{background(255);}
	line(height, 0, height, height)
  
}
