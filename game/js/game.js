	// Create the canvas
	var canvas = document.createElement("canvas"); // Creation of the canvas
	var ctx = canvas.getContext("2d"); // Use the 2d technology
	canvas.width 	= 500; // Define width of the map
	canvas.height 	= 500; // Define height of the map
	document.body.appendChild(canvas); // Use the canvas as a child attribute of body


	// Background image
	var ibgReady = false;
	var ibgImage = new Image();
	ibgImage.onload = function () {
		ibgReady = true;
	};
	ibgImage.src = "pictures/introduction.PNG";


	// Background image
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};
	bgImage.src = "pictures/500_background.PNG"; // Background of levels

	// Hero image
	var heroReady = false;
	var heroImage = new Image();
	heroImage.onload = function () {
		heroReady = true;
	};
	heroImage.src = "pictures/a_caster.PNG"; // Picture of the chosen hero


	// Monster 1 image
	var monsterReady = false;
	var monsterImage = new Image();
	monsterImage.onload = function () 
	{
		monsterReady = true;
	};
	monsterImage.src = "pictures/a_slim.PNG"; // Picture of a monster
	 
	// Monster 2 image
	var monster2Ready = false;
	var monster2Image = new Image();
	monster2Image.onload = function () 
	{
		monster2Ready = true;
	};
	monster2Image.src = "pictures/a_slim.PNG"; // Picture of a monster
	  
	// Monster 3 image
	var monster3Ready = false;
	var monster3Image = new Image();
	monster3Image.onload = function () 
	{
		monster3Ready = true;
	};
	monster3Image.src = "pictures/a_bat.PNG"; // Picture of a monster
	  

	// Strike mode
	var StrikeReady = false;
	var StrikeImage = new Image();
	StrikeImage.src = "pictures/strikeMagic.PNG"; // Picture of a monster
	
	// Slash mode
	var SlashReady = false;
	var SlashImage = new Image();
	SlashImage.src = "pictures/slash.PNG"; // Picture of a monster
	  

	// Game objects
	var hero 			= { speed: 256 }; // movement in pixels per second
	var life			= { hp : 2 };

	var monster			= { alive:true };
	var monster2		= { alive:true };
	var monster3		= { alive:true };
	
	var slashX			= 0;
	var slashY			= 0;
	
	var strike			= { speed: 5 };
	var strikeX			= 0;
	var position		= 0;
	var strikeType		= 0;

	var monstersCaught 	= 0;

	// Handle keyboard controls
	var keysDown 		= {};

	addEventListener("keydown", function (e)
	{
		keysDown[e.keyCode] = true;
	}, false);

	addEventListener("keyup", function (e)
	{
		delete keysDown[e.keyCode];
	}, false);

	// Reset the game when the player catches a monster
	var reset = function () 
	{
		hero.x = canvas.width / 2.40;
		hero.y = canvas.height - (canvas.height/4) ;

		// Throw the monster somewhere on the screen randomly
		monster.x = 32 + (Math.random() * (canvas.width  - 128));
		monster.y = 32 + (Math.random() * (canvas.height - 128));
		
		monster2.x = 32 + (Math.random() * (canvas.width  - 128));
		monster2.y = 32 + (Math.random() * (canvas.height - 128));
		
		monster3.x = 32 + (Math.random() * (canvas.width  - 128));
		monster3.y = 32 + (Math.random() * (canvas.height - 128));
	};


	// Update game objects
	var update = function (modifier)
	{
		if (38 in keysDown) 
		{ // Player holding up
			if(hero.y >= 35) // Limitation because of the walls
				hero.y -= hero.speed * modifier;
		}
		if (40 in keysDown) 
		{ // Player holding down
			if(hero.y <= canvas.height-115) // Limitation because of the wall
				hero.y += hero.speed * modifier;
		}
		if (37 in keysDown) 
		{ // Player holding left
		   if(hero.x >= 35) // Limitation because of the wall
				hero.x -= hero.speed * modifier;
		}
		if (39 in keysDown) 
		{ // Player holding right
			if(hero.x <= canvas.width-115) // Limitation because of the wall
				hero.x += hero.speed * modifier;
		}
		if (32 in keysDown) 
		{
			strikeType = 0;
			strikeX= hero.x;
			StrikeReady = true;	
		}
		if (17 in keysDown) 
		{
			if(strikeType == 0)
				strikeType = 1;
			else
				strikeType = 0;
		}



		// Are they touching?
		if(hero.x <= (monster.x + 32) && (monster.x <= (hero.x + 32) && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)))							
		{
			life.hp = life.hp - 1;
			hero.y = hero.y +36;
		}
		
		 // Are they touching?
		if( hero.x <= (monster2.x + 32) &&(monster2.x <= (hero.x + 32) && hero.y <= (monster2.y + 32) && monster2.y <= (hero.y + 32)))							
		{
			life.hp = life.hp -1;
			hero.y = hero.y +36;
		}
		
		 // Are they touching?
		if ( hero.x <= (monster3.x + 32) && ( monster3.x <= (hero.x + 32) && hero.y <= (monster3.y + 32) && monster3.y <= (hero.y + 32)))							
		{
			life.hp = life.hp -1;
			hero.y = hero.y + 36;
		}
		
		if ( strike.x <= (monster.x + 32) && (monster.x <= (strike.x + 32) && strike.y <= (monster.y + 32) && monster.y <= (strike.y + 32))	)						
		{
			SlashReady = true;
			slashX = monster.x;
			slashY = monster.y;
			
			monster.alive = false;
			monster.x = 1000;
		}
		if ( strike.x <= (monster2.x + 32) && (monster2.x <= (strike.x + 32) && strike.y <= (monster2.y + 32) && monster2.y <= (strike.y + 32)))							
		{
			SlashReady = true;
			slashX = monster2.x;
			slashY = monster2.y;
			
			monster2.alive = false;
			monster2.x = 1000;
			
		}
		if ( strike.x <= (monster3.x + 32) && (monster3.x <= (strike.x + 32) && strike.y <= (monster3.y + 32) && monster3.y <= (strike.y + 32)))							
		{
			SlashReady = true;
			slashX = monster3.x;
			slashY = monster3.y;
			
			monster3.alive = false;
			monster3.x = 1000;
			SlashReady = false;
		}
		
		if(monster.alive == false && monster2.alive == false && monster3.alive == false)
		{
			window.location.replace("level_1_win.html");
		}
		
		if(life.hp < 0)
		{
			window.location.replace("lost.html");
		}
		
	};


	var inc = 0;
	// Draw everything
	var render = function () 
	{
		if (bgReady) 
		{
			ctx.drawImage(bgImage, 0, 0);
		}

		if (heroReady) 
		{
			
			ctx.drawImage(heroImage, hero.x, hero.y); // Draw the hero
		}

		var pos_min = 0; 
		var b1 = false;
		var b2 = false;
		var b3 = false;
		
		if(Math.random()*10 <5)
			pos_min = 1;
		else
			pos_min = -1;
		
		if(Math.random()*100 < 2)
			b1 = true;
		else
			b1 = false;
		if(Math.random()*100 < 2)
			b2 = true;
		else
			b2= false;
		if(Math.random()*100 < 2)
			b3 = true;
		else
			b3 = false;
		
		if (monsterReady)
		{
			if(b1)
			{
				//do
				//{
					monster.x = monster.x + (pos_min * (Math.random() * 25));
					monster.y = monster.y + (pos_min * (Math.random() * 25));		
				//}
				//while(monster.x > canvas.width || monster.x < 0 || monster.y > canvas.height || monster.y < 0)
			}	
			ctx.drawImage(monsterImage, monster.x, monster.y); // Draw the monster
		}
		
		if (monster2Ready)
		{
			if(b2)
			{
				//do
				//{
					monster2.x = monster2.x + (pos_min * (Math.random() * 25));
					monster2.y = monster2.y + (pos_min * (Math.random() * 25));		
				//}
				//while(monster2.x > canvas.width || monster2.x < 0 || monster2.y > canvas.height || monster2.y < 0)
			}
			ctx.drawImage(monster2Image, monster2.x, monster2.y); // Draw the monster 2
		}
		
		if (monster3Ready)
		{
			if(b3)
			{
				//do
				//{
					monster3.x = monster3.x + (pos_min * (Math.random() * 70));
					monster3.y = monster3.y + (pos_min * (Math.random() * 70));		
				//}
				//while(monster3.x > canvas.width || monster3.x < 0 || monster3.y > canvas.height || monster3.y < 0)
			}	
			ctx.drawImage(monster3Image, monster3.x, monster3.y); // Draw the monster 2
		}

		
		if (StrikeReady)
		{	
			if(strikeType == 0)
			{
				position = position - (1 * strike.speed);
				ctx.drawImage(StrikeImage, strikeX, hero.y+position); // Draw the monster 2
				strike.x = strikeX;
				strike.y = hero.y+position;
				if(hero.y+position < 0)
				{
					position = 0;
					StrikeReady = false;		
				}
			}
			else
			{
				position = position + (1 * strike.speed);
				ctx.drawImage(StrikeImage, strikeX, hero.y+position); // Draw the monster 2
				strike.x = strikeX;
				strike.y = hero.y+position;

			}
			
				
			if (SlashReady)
			{
				ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
			}
			

		}

		SlashReady = false;
		
		// Score
		ctx.fillStyle = "rgb(250, 250, 250)";
		ctx.font = "16px OCR A Std, monospace";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Sword of the Jaegers", 27, 15);
		
		ctx.fillStyle = "rgb(250, 250, 250)";
		ctx.font = "16px OCR A Std, monospace";
		ctx.textAlign = "right";
		ctx.textBaseline = "top";
		
		if(life.hp == 2)
			ctx.fillText("Life (\u2665 \u2665 \u2665)", 475, 15); // Display current lifes
		else if (life.hp==1)
			ctx.fillText("Life (\u2665 \u2665)", 475, 15); // Display current lifes
		else
			ctx.fillText("Life (\u2665)", 475, 15); // Display current lifes
	};


	// The main game loop
	var main = function () 
	{
		var now 	= Date.now(); // Current Date
		var delta 	= now - then; // Difference between the beginning and the end of the game

		update(delta / 1000); // Update
		render(); // Display

		then = now; 

		// Request to do this again ASAP
		requestAnimationFrame(main);
		


	};

	// ====================================================== //
	// Draw everything
	var iRender = function () 
	{
		if (ibgReady) {
			ctx.drawImage(ibgImage, 0, 0);
		}
	};

	 // Update game objects
	var iUpdate = function () 
	{
		reset();
		main();

	};
				// The main game loop
	var iMain = function () 
	{
		var inow 	= Date.now(); // Current Date
		var idelta 	= inow - ithen; // Difference between the beginning and the end of the game

		
		iRender(); // Display
		iUpdate(); // Update

		ithen = now; 

		// Request to do this again ASAP
		requestAnimationFrame(iMain);

	};		
	// ====================================================== //
				
	// Cross-browser support for requestAnimationFrame
	var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

	// Let's play this game!
	var then = Date.now();
	var ithen = Date.now();
	iMain();