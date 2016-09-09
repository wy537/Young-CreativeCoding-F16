//Creative Coding HW1
//Professor Caitlin Harris
//September 9, 2016
//William Young

//Creating dimensional variables
int end = 600;
int half = 300; 
int quarter = 150;
int threeq = 450;
int third = 200;
int twothirds = 400;
int edge = 20;
boolean print = true;
PImage img;

//Creating 600px square canvas and loading image
void setup(){
size(600, 600);
img = loadImage("willoutline.png");
smooth();
}

//Printing border and image to screen with text
void draw(){
  strokeWeight(2);
  stroke(255, 255, 255);
  if (print == true){
    tint(255, 255);
    image(img, edge, edge);
    textSize(15);
    fill(0, 102, 153);
    text("Step 1: Remember this image. Right click to continue.", 100, 60);
    textSize(10);
    fill(0, 102, 153);
    text("Please note the above image was converted from a photo using an online tool.", 100, 73);
  }
  line(0, 0, edge, edge);
  line(end, end, end-edge, end-edge);
  line(0, end, edge, end-edge);
  line(end, 0, end-edge, edge);
  noFill();
  rect(edge, edge, 560, 560);
  stroke(0, 0, 255);
  if (mousePressed && (mouseButton == RIGHT)){
    print = false;
    background(255);
    textSize(15);
    fill(0, 102, 153);
    text("Step 2: Draw me using the left mouse click.", 150, 60);
  }
  
}

//Creating drawing function according to mouse drag
void mouseDragged(){
  line(mouseX, mouseY, mouseX+1, mouseY+1);
}