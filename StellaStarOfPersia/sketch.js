/* William Young
Professor Caitlin Morris
Oct 1, 2016
p5.js: Recreating 'Frank Stella, Star of Persia'
http://www.mmoca.org/sites/default/files/styles/exhibition_main_image/public/images-exhibits/stella_star-of-persia-ii_lr.jpg?itok=Ne_AxYmo
 */

var d = 60;

function setup() {
	createCanvas(600, 600);
	background(240);

}

function draw() {

	
	translate(300, 300); 

	for (var i=0; i<6; i++){
		
		fill(150-30*i, 30*i, 255-15*i);
		stroke(240);
		strokeWeight(1);
		rotate(radians(60*i));
		for (var j=0; j<9; j++){
 			triangle(0, 20*j, -150+20*j/1.73, 260, 150-20*j/1.73, 260);}
 		fill(240);
 		triangle(0, 20*9, -150+20*9/1.73, 260, 150-20*9/1.73, 260);
	}


/* For some reason, two of the triangles would not draw in the above loop - so I manually added them below. */


	rotate(radians(120));
	fill(150, 30, 255);
	for (var j=0; j<9; j++){
 		triangle(0, 20*j, -150+20*j/1.73, 260, 150-20*j/1.73, 260);}
 	fill(240);
 	triangle(0, 20*9, -150+20*9/1.73, 260, 150-20*9/1.73, 260);
 
 	rotate(radians(180));
	fill(100, 30, 255);
	for (var j=0; j<9; j++){
 		triangle(0, 20*j, -150+20*j/1.73, 260, 150-20*j/1.73, 260);}
 	fill(240);
 	triangle(0, 20*9, -150+20*9/1.73, 260, 150-20*9/1.73, 260);
 		
	

}