// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "pictures/500_a_chooseHero.PNG";


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) 
{
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e)
{
	delete keysDown[e.keyCode];
}, false);



// Draw everything
var render = function () 
{
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
};

 // Update game objects
var update = function (modifier) 
{
	if (87 in keysDown) 
	{ // Player holding up
		window.location.replace("command.html");
	}
	if (67 in keysDown) 
	{ // Player holding up
		window.location.replace("command.html");
	}
	if (80 in keysDown) 
	{ // Player holding up
		window.location.replace("command.html");
	}


};

// The main game loop
var main = function () 
{
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
update();
main();