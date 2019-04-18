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
bgImage.src = "pictures/500_back.PNG";


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
	
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "32px OCR A Std, monospace";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText("Hall Of Fame", canvas.width/1.42, 50); // Display current lifes
	
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "32px OCR A Std, monospace";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText("Nate - 750'000pts", 350, canvas.height/3); // Display current lifes

	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "32px OCR A Std, monospace";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText("Fade - 500'000pts", 350, canvas.height/2); // Display current lifes

	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "32px OCR A Std, monospace";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText("Plyr - 490'000pts", 350, canvas.height/1.5); // Display current lifes

	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "32px OCR A Std, monospace";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText("Your - 120'000pts", 350, canvas.height-50); // Display current lifes

};

 // Update game objects
var update = function (modifier) 
{
	if (13 in keysDown) 
	{ // Player holding up
		window.location.replace("hero.html");
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