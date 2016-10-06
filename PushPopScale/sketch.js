/* William Young
Professor Caitlin Morris
Assignment 10.04
Loop of boxes rotate according to mouse position.
*/
var rot=0;

function setup() {
	createCanvas(500, 500);

}

function draw() {	
	//Push and pop create separate frame of reference for local state setup
	/*push();
	fill(0, 30, 250);
	translate(300, 300);
	rot = map(mouseX, 0, width, 0, 2*PI);
	rotate(rot)
	rect(100,100,40, 40);
	pop();*/


	for(i=0; i<10; i++){
		push();
		fill(0, 40*i, 250);
		translate(300+20*i, 300);
		rot = map(mouseX, 0, width, 0, 2*PI);
		rotate(rot)
		rect(50+20*i,50,40, 40);
		pop();
	}
}

