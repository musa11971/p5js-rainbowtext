var rainbowText = 'Colors colors';
var fontSize = 60;
var canvasSize = 800;
var letters = [];

function setup() {
	createCanvas(canvasSize, 1.50 * fontSize);
	colorMode(HSB, 100);

	var current = new Letter(rainbowText[0], 0);
	letters.push(current);

	for(var i = 1; i < rainbowText.length; i++) {
		current = new Letter(rainbowText[i], current.color+5);
		letters.push(current);
	}
}

function draw() {
	background(0);

	// Show letters
	for(var i = 0; i < letters.length; i++) {
		letters[i].show();
	}
}

function Letter(char, col) {
	this.x = letters.length * 35 + 35;
	this.y = 0.70 * height;
	this.char = char;
	this.color = col;
}

Letter.prototype.show = function() {
	textSize(fontSize);
	textAlign(CENTER);
	fill(this.color, 255, 255);
	text(this.char, this.x, 0.70 * height);

	// Update color
	this.color++;
	if(this.color > 100) this.color = 0;
}