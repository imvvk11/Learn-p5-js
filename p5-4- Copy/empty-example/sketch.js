var spot = {
	x: 100,
	y: 50
	
};

var col = {
	r: 255,
	g: 0,
	b: 0
};

var r1 = 128;
var g1 = 0;
var b1 = 0;

function setup() {
	createCanvas(windowHeight,windowWidth);
	background(0);
}

function draw(){
	spot.x= random(0, width);
	spot.y = random(0, height);
	col.r = random(100,255);
	col.g = 0;
	col.b = random(100,190);
	noStroke();
	fill(col.r,col.g,col.b);
	ellipse(spot.x, spot.y,25,25);
	
}

function mousePressed() {
	for(var i = 0; i <10; i++) {
		rbackground(r1,g1,b1);
		g1+=5;
		b1+=10;
		
	}
	
}