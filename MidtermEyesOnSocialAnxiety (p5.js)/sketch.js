/* William Young
Professor Caitlin Morris
Midterm Assignment
Project: Eyes on Social Anxiety
Use the mouse click to move blocks in the shaded area and create a safe space for the character to rest inside and achieve peace.
Oct 17, 2016
*/

var xstart = [];
var ystart = [];
var chaos;
var dialation;

function setup() {
  createCanvas(800,600);
  noCursor();
  chaos = 1;
  d = new Block(300,300,50,300);
  r = new Block(50,500,200,50);

//Instantiating arrow start (base) locations in an array
  for (var i = 0; i < 100; i++){
  	xstart[i] = random(3*width/4);
  	ystart[i] = random(height/5, height);
  }
  for (var i = 0; i < 15; i++){
    xstart[i] = random(0.6*width, width);
    ystart[i] = random(height/5, height/2.5);
  }
}

function draw() {
  background(chaos/2, 255-chaos/2, 0);

//Background guiding rectangles so users know where to put the blocks
  push();
  fill(0, 126, 255, 50);
  rect(620,300,50,300);
  rect(670,300,200,50);
  pop();

  d.rollover(mouseX,mouseY);
  d.drag(mouseX,mouseY);
  d.display();
  r.rollover(mouseX,mouseY);
  r.drag(mouseX,mouseY);
  r.display();

//Drawing arrows
  for (var i = 0; i < 120; i++){
  	push();
  	stroke(300-2*i, 0, 2*i);
 	  strokeWeight(2);
  	arrow(xstart[i],ystart[i],50,atan2(mouseY-ystart[i], mouseX-xstart[i]));
  	pop();
  }

//Creating heading and subheading at top of screen
  fill(0, 126, 255, 50);
  rect(5, 5, 790, 80);
  fill(255);
  textSize(30);
  text("Eyes on Social Anxiety", 160, 40);
  textSize(20);
  text("Please use the blocks to shelter me away from all the gazing eyes!", 303, 65);

  //Creating interaction with chaos and subsequent dialation for character response.
  push();
  fill(0, 50, dialation*chaos);
  dialation = random(-1,1)*0.01*chaos
  if (chaos>300){
    chaos = 300;
  }
  else if (chaos < 0){
    chaos = 0;
    fill(0, 255, 126, 190);
    rect(60, 153, 685, 60);
    fill(255);
    textSize(40);
    text("Thank you for making me feel safe!", 390, 200)
  }
  ellipse(mouseX-dialation, mouseY+dialation, 50, 50);
  ellipse(mouseX+dialation, mouseY-dialation, 20*dialation, 20*dialation);
  pop();

//Setting chaos parameters  
if (mouseX>650 && mouseY>300 && d.x > 580 && r.x > 550 && r.y > 300){
  chaos -= 1;
}
else{
  chaos += 1;
}}

//Functions for moving blocks
function mousePressed() {
	d.clicked(mouseX,mouseY);
  r.clicked(mouseX,mouseY);
}

function mouseReleased() {
	d.stopDragging();
  r.stopDragging();
}

//Generate arrow function
function arrow(xposition, yposition, size, angle){
	push();
	translate(xposition,yposition);
	rotate(angle);
	translate(-xposition,-yposition);
 
 //Allowing arrows to divert away from character when chaos level is low.
	if(chaos < 10){
		line(xposition - size / 2 + size / 10, yposition + size / 20, xposition - size / 2,yposition);
		line(xposition + size / 2, yposition, xposition - size / 2, yposition);
		line(xposition - size / 2 + size / 10, yposition - size / 20, xposition - size / 2,yposition);
		}
	else{
		line(xposition + size / 2 - size / 10, yposition - size / 20, xposition + size / 2,yposition);
		line(xposition - size / 2, yposition, xposition + size / 2, yposition);
		line(xposition + size / 2 - size / 10, yposition + size / 20, xposition + size / 2,yposition);
	}
	pop();
}

//Create blocks on desired position and size.
function Block(tempX, tempY, tempW, tempH) {
  this.dragging = false; 
  this.over = false; 
  
  this.x = tempX;
  this.y = tempY;
  this.w = tempW;
  this.h = tempH;
  this.offsetX = 0;
  this.offsetY = 0; 

  // Display the block
  Block.prototype.display = function() {
    noStroke();
    
    if (this.dragging) fill (50);
    else if (this.over) fill(100);
    else fill(175,200);
    noStroke();
    rect(this.x,this.y,this.w,this.h);
    fill(255);
    textAlign(CENTER);
    textSize(13);
    text("Drag me", this.x + this.w / 2, this.y + this.h / 2);
  }

  // Check mouse click is inside rectange
  Block.prototype.clicked = function(mx, my) {
    if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
      this.dragging = true;
      // Relate click to corner of rect
      this.offsetX = this.x-mx;
      this.offsetY = this.y-my;
    }
  }
  
  // Check rollover is inside rectangle for shading
  Block.prototype.rollover = function(mx, my) {
    if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
      this.over = true;
    } else {
      this.over = false;
    }
  }

  // Mouse is released - therefore do not drag
  Block.prototype.stopDragging = function() {
    this.dragging = false;
  }
  
  // Mouse is clicked - therefore drag
  Block.prototype.drag = function(mx, my) {
    if (this.dragging) {
      this.x = mx + this.offsetX;
      this.y = my + this.offsetY;
    }
  }

}