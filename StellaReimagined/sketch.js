/* William Young
Professor Caitlin Morris
Nov 13, 2016
p5.js: Reimagining the recreation of 'Frank Stella, Star of Persia'
http://www.mmoca.org/sites/default/files/styles/exhibition_main_image/public/images-exhibits/stella_star-of-persia-ii_lr.jpg?itok=Ne_AxYmo
 */

var speed = 1
var move
var shift

function setup() {
	createCanvas(600, 600);
	background(240);
	frameRate(50);

}

function draw() {
	background(240);
	move = frameCount*speed
	translate(300, 300); 
	



	for (var i=0; i<6; i++){
		
		//Create a matrix for each iteration of the loop to avoid accumuluating rotation angles
		push();
			rotate(0.002*move);
		
			fill(150-30*i, 30*i, 255-15*i);
			stroke(240);
			strokeWeight(1);
			rotate(radians(60*i));

			triangle(0, 20, -150+20/1.73, 260, 150-20/1.73, 260);

			
			for (var j=0; j<9; j++){
	 			triangle(0, 20*j, -150+20*j/1.73, 260, 150-20*j/1.73, 260);
	 		}
	 		fill(240);
	 		triangle(0, 20*9, -150+20*9/1.73, 260, 150-20*9/1.73, 260);
	 		
	 	pop();

	 	
	}


	if(frameCount<3000){
		push();
		fill(255, 250, 250, 300-frameCount/3);
		textSize(50);
		text("STELLA STAR", -170, -50);
		textSize(30);
		text("Press 'W/S' to speed up/down!", -200, 0);
		pop();

	}

}

function keyPressed(){
	println(key);
	if(key == 'W'){
		speed += 5;
		println('up');
	}
	if(key == 'S'){
		speed -= 5;
		println('down');
	}

}