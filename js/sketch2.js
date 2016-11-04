function setup() {
	createCanvas(500, 500);
	background(240);

}

function draw(){
	if (frameCount % 25 == 0) {
	push();
translate(250, 250);
	stroke(233,140,143);
	line(0,0,rayon,0);
	var rayon = random(200);
rotate(radians(frameCoun/0.78));
	line(0,0,rayon,0);
	//	rect(0, 0, 300, 1);
		pop();
	}
	else if (frameCount % 35 == 0) {
		fill(183,207,199);
		noStroke();
		push();
		translate(250, 250);
		rotate(radians(frameCount));
		rect(0, 0, 150, 1);
		pop();
	}
		else if (frameCount % 55 == 0) {
		fill(183,207,199);
		noStroke();
		push();
		translate(250, 250);
		rotate(radians(frameCount));
		rect(0, 0, 450, 1);
		pop();
	}
			else if (frameCount % 15 == 0) {
		fill(233,140,143);
		noStroke();
		push();
		translate(250, 250);
		rotate(radians(frameCount));
		rect(0, 0, 350, 1);
		pop();
	}
				else if (frameCount % 10 == 0) {
		fill(183,207,199);
		noStroke();
		push();
		translate(250, 250);
		rotate(radians(frameCount));
		rect(0, 0, 450, 1);
		pop();
	}
}
