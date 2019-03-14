	// =============================================================================== //
	// COMMAND BOARD
	// =============================================================================== //
	var caseByMovementSlim	 	= 25; 	// Movement by 1 to 100
	var chanceToMoveSlim		= 5; 	// Chance to move by 1 to 100
	
	var caseByMovementMonster3 	= 35; 	// Movement by 1 to 100
	var chanceToMoveMonster3	= 5; 	// Chance to move by 1 to 100
	var chanceToStrikeMonster3  = 7;  	// chance to strike by 1 to 10
	
	var monsterStrikeSpeed		= 10;	// Speed of the strike by 1 to 100
	
	var myHero					= 2;	// Choose your hero
	// =============================================================================== //
	
	
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
	
	if(myHero == 0)
	{
		heroImage.src = "pictures/a_warrior.PNG"; // Picture of the chosen hero
	}
	else if(myHero == 1)
	{
		heroImage.src = "pictures/a_caster.PNG"; // Picture of the chosen hero
	}
	else
	{
		heroImage.src = "pictures/a_paladin.PNG"; // Picture of the chosen hero
	}
	
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
	  

	// =================== HERO STRIKES DESIGNS =================== //
	// Strike mode
	var StrikeReady = false;
	var StrikeImage = new Image();
	
	// =================== ============== ======================== //
	
	// =================== MONSTER STRIKES DESIGNS =============== //
	
	// Strike mode
	var Monster3StrikeReady = false;
	var Monster3StrikeImage = new Image();
	Monster3StrikeImage.src = "pictures/t_poison.PNG"; // Picture of a strike
	
	// Strike mode
	var d_Monster3StrikeReady = false;
	var d_Monster3StrikeImage = new Image();
	d_Monster3StrikeImage.src = "pictures/b_poison.PNG"; // Picture of a strike
	
	// Strike mode
	var l_Monster3StrikeReady = false;
	var l_Monster3StrikeImage = new Image();
	l_Monster3StrikeImage.src = "pictures/l_poison.PNG"; // Picture of a strike
	
	// Strike mode
	var r_Monster3StrikeReady = false;
	var r_Monster3StrikeImage = new Image();
	r_Monster3StrikeImage.src = "pictures/r_poison.PNG"; // Picture of a strike
	// =================== ============== ======================== //
	
	
	
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
	
	var monsterStrike3	= { power:1 };
	
	var monsterStat		= { hp : 30 };
	var monster2Stat	= { hp : 30 };
	var monster3Stat	= { hp : 20 };
	
	var slashX			= 0;
	var slashY			= 0;
	
	// ==== Strike HERO ==== //
	var strike			= { speed: 5 };
	var strikeX			= 0;
	var strikeY			= 0;
	var position		= 0;
	var strikeType		= 0;
	
	
	// ==== Strike Bat (TOP) ==== //
	var mstrike			= { speed: monsterStrikeSpeed };
	var mstrikeX		= 0;
	var position3		= 0;
	var mstrikeType		= 0;
	
	// ==== Strike Bat (BOT) ==== //
	var d_mstrike		= { speed: monsterStrikeSpeed };
	var d_mstrikeX		= 0;
	var d_position3		= 0;
	var d_mstrikeType	= 0;
	
	// ==== Strike Bat (LEF) ==== //
	var l_mstrike		= { speed: monsterStrikeSpeed };
	var l_mstrikeX		= 0;
	var l_position3		= 0;
	var l_mstrikeType	= 0;
	
	// ==== Strike Bat (RIG) ==== //
	var r_mstrike		= { speed: monsterStrikeSpeed };
	var r_mstrikeX		= 0;
	var r_position3		= 0;
	var r_mstrikeType	= 0;

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

		if (87 in keysDown) 
		{ // Player holding up
			if(hero.y >= 35) // Limitation because of the walls
				hero.y -= hero.speed * modifier;
		}
		if (83 in keysDown) 
		{ // Player holding down
			if(hero.y <= canvas.height-115) // Limitation because of the wall
				hero.y += hero.speed * modifier;
		}
		if (65 in keysDown) 
		{ // Player holding left
		   if(hero.x >= 35) // Limitation because of the wall
				hero.x -= hero.speed * modifier;
		}
		if (68 in keysDown) 
		{ // Player holding right
			if(hero.x <= canvas.width-115) // Limitation because of the wall
				hero.x += hero.speed * modifier;
		}
		
		if(myHero == 1)
		{
			if (38 in keysDown) 
			{
				StrikeImage.src = "pictures/strikeMagic.PNG"; // Picture of strike
				strikeType 		= 0;
				position 		= 0;
				strikeX			= hero.x;
				StrikeReady 	= true;	
			}
			if (40 in keysDown) 
			{
				StrikeImage.src = "pictures/b_strikeMagic.PNG"; // Picture of strike
				strikeType 		= 1;
				position		= 0;
				strikeX			= hero.x;
				StrikeReady 	= true;
			}
			if (39 in keysDown) 
			{
				StrikeImage.src = "pictures/r_strikeMagic.PNG"; // Picture of strike
				strikeType 		= 2;
				position 		= 0;
				strikeY			= hero.y;
				StrikeReady 	= true;	
			}
			if (37 in keysDown) 
			{
				StrikeImage.src = "pictures/l_strikeMagic.PNG"; // Picture of strike
				strikeType 		= 3;
				position		= 0;
				strikeY			= hero.y;
				StrikeReady 	= true;
			}
		}
		else
		{
			if (38 in keysDown) 
			{
				StrikeImage.src = "pictures/a_sword.PNG"; // Picture of strike
				strikeType 		= 0;
				strikeX			= hero.x;
				strikeY			= hero.y;
				StrikeReady 	= true;	
			}
			if (40 in keysDown) 
			{
				StrikeImage.src = "pictures/a_sword.PNG"; // Picture of strike
				strikeType 		= 1;
				strikeX			= hero.x;
				strikeY			= hero.y;
				StrikeReady 	= true;
			}
			if (39 in keysDown) 
			{
				StrikeImage.src = "pictures/a_sword.PNG"; // Picture of strike
				strikeType 		= 2;
				strikeX			= hero.x;
				strikeY			= hero.y;
				StrikeReady 	= true;	
			}
			if (37 in keysDown) 
			{
				StrikeImage.src = "pictures/a_sword.PNG"; // Picture of strike
				strikeType 		= 3;
				strikeX			= hero.x;
				strikeY			= hero.y;				
				StrikeReady 	= true;
			}
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
			SlashReady 		= true;
			
			slashX 			= monster.x;
			slashY 			= monster.y;

			monsterStat.hp  = monsterStat.hp - 1;
			
			if(monsterStat.hp<0)
			{
				monster.alive= false;
				monsterReady = false;
				monster.x    = 800;
			}
			
			
		}
		if ( strike.x <= (monster2.x + 32) && (monster2.x <= (strike.x + 32) && strike.y <= (monster2.y + 32) && monster2.y <= (strike.y + 32)))							
		{
			SlashReady 	= true;
						
			slashX = monster2.x;
			slashY = monster2.y;
			
			monster2Stat.hp = monster2Stat.hp-1;
			
			if(monster2Stat.hp<0)
			{
				monster2.alive 	= false;
				monster2Ready 	= false;
				monster2.x    	= 800;
			}
			
		}
		
		if (strike.x <= (monster3.x + 32) && (monster3.x <= (strike.x + 32) && strike.y <= (monster3.y + 32) && monster3.y <= (strike.y + 32)))							
		{
			SlashReady 	= true;
			
			slashX = monster3.x;
			slashY = monster3.y;
			
			monster3Stat.hp  = monster3Stat.hp-1;
			
			if(monster3Stat.hp<0)
			{
				monster3.alive 	= false;
				monster3Ready 	= false;
				monster3.x    	= 800;
			}
		}
			
		if( hero.x <= (mstrike.x + 32) &&(mstrike.x <= (hero.x + 32) && hero.y <= (mstrike.y + 32) && mstrike.y <= (hero.y + 32)))							
		{
			life.hp = life.hp - 1;
			hero.y = hero.y + 36;
		}
		if( hero.x <= (d_mstrike.x + 32) &&(d_mstrike.x <= (hero.x + 32) && hero.y <= (d_mstrike.y + 32) && d_mstrike.y <= (hero.y + 32)))							
		{
			life.hp = life.hp - 1;
			hero.y = hero.y + 36;
		}
		if( hero.x <= (l_mstrike.x + 32) &&(l_mstrike.x <= (hero.x + 32) && hero.y <= (l_mstrike.y + 32) && l_mstrike.y <= (hero.y + 32)))							
		{
			life.hp = life.hp - 1;
			hero.y = hero.y + 36;
		}
		if( hero.x <= (r_mstrike.x + 32) &&(r_mstrike.x <= (hero.x + 32) && hero.y <= (r_mstrike.y + 32) && r_mstrike.y <= (hero.y + 32)))							
		{
			life.hp = life.hp - 1;
			hero.y = hero.y + 36;
		}
		
		if(monster.alive == false && monster2.alive == false && monster3.alive == false)
		{
			window.location.replace("score.html");
		}
		
		if(life.hp < 0)
		{
			window.location.replace("lost_p.html");
		}
		
		// STRIKE DIFFICULTY
		if(Math.random()*1000<chanceToStrikeMonster3 && monster3.alive)
		{
			position3				= 0;
			Monster3StrikeReady 	= true;
			d_position3				= 0;
			d_Monster3StrikeReady 	= true;
			r_position3				= 0;
			r_Monster3StrikeReady 	= true;
			l_position3				= 0;
			l_Monster3StrikeReady 	= true;
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
	
		if(Math.random()*100 < chanceToMoveSlim)
			b1 = true;
		else
			b1 = false;

		if(Math.random()*100 < chanceToMoveSlim)
			b2 = true;
		else
			b2= false;
		if(Math.random()*100 < chanceToMoveMonster3)
			b3 = true;
		else
			b3 = false;
		
		
		// ================== Mouvement Monster Number 1 ================== //
		if (monsterReady)
		{
			if(b1)
			{
				do
				{
					if(Math.random()*10 <5)
						pos_min = 1;
					else
						pos_min = -1;
					
					
				
					monster.x = monster.x + (pos_min * (Math.random() * 25));
					monster.y = monster.y + (pos_min * (Math.random() * 25));		
				}
				while(monster.x > canvas.width-50 && monster.x < 0 && monster.y > canvas.height-50 && monster.y < 0)
			}	
			ctx.drawImage(monsterImage, monster.x, monster.y); // Draw the monster
		}
		
		// ================== Mouvement Monster Number 2 ================== //
		if (monster2Ready)
		{
			if(b2)
			{
				do
				{
					if(Math.random()*10 <5)
						pos_min = 1;
					else
						pos_min = -1;
					
					monster2.x = monster2.x + (pos_min * (Math.random() * caseByMovementSlim));
					monster2.y = monster2.y + (pos_min * (Math.random() * caseByMovementSlim));		
				}
				while(monster2.x > canvas.width-50 || monster2.x < 50 || monster2.y > canvas.height-50 || monster2.y < 50)
			}
			ctx.drawImage(monster2Image, monster2.x, monster2.y); // Draw the monster 2
		}
		
		// ================== Mouvement Monster Number 3 ================== //
		if (monster3Ready)
		{
			if(b3)
			{
				do
				{
					if(Math.random()*10 <5)
						pos_min = 1;
					else
						pos_min = -1;
					
					monster3.x = monster3.x + (pos_min * (Math.random() * caseByMovementMonster3));
					monster3.y = monster3.y + (pos_min * (Math.random() * caseByMovementMonster3));		
				}
				while(monster3.x > canvas.width-50 || monster3.x < 50 || monster3.y > canvas.height-50 || monster3.y < 50)
			}	
			ctx.drawImage(monster3Image, monster3.x, monster3.y); // Draw the monster 2
		}

		// ================== Mouvement Magical Strike HERO ================== //
		if (StrikeReady)
		{	
			
			if(myHero == 1)
			{
				// ================== Mouvement Magical Strike HERO TOP ================== //
				if(strikeType == 0)
				{
					position = position - (1 * strike.speed);
					ctx.drawImage(StrikeImage, strikeX, hero.y+position); // Draw the monster 2
					strike.x = strikeX;
					strike.y = hero.y+position;
					if(hero.y+position < 0)
					{
						position 	= 0;
						StrikeReady = false;		
					}
				}
				
				// ================== Mouvement Magical Strike HERO Bottom ================== //
				if(strikeType == 1)
				{
					position = position + (1 * strike.speed);
					ctx.drawImage(StrikeImage, strikeX, hero.y+position); // Draw the monster 2
					strike.x = strikeX;
					strike.y = hero.y+position;
					if(hero.y+position > canvas.height)
					{
						position 	= 0;
						StrikeReady = false;		
					}
				}
		
				// ================== Mouvement Magical Strike HERO Left ================== //
				if(strikeType == 2)
				{
					position = position + (1 * strike.speed);
					ctx.drawImage(StrikeImage, hero.x+position, strikeY); // Draw the monster 2
					strike.x = hero.x+position;
					strike.y = strikeY;
					if(hero.x+position > canvas.width)
					{
						position 	= 0;
						StrikeReady = false;		
					}
				}
				// ================== Mouvement Magical Strike HERO Right ================== //
				if(strikeType == 3)
				{
					position = position - (1 * strike.speed);
					ctx.drawImage(StrikeImage, hero.x+position, strikeY); // Draw the monster 2
					strike.x = hero.x+position;
					strike.y = strikeY;
					if(hero.x+position < 0)
					{
						position 	= 0;
						StrikeReady = false;		
					}
				}
		
					
				if (SlashReady)
				{
					ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
				}
			}
			else
			{
				if(strikeType == 0)
				{
					ctx.drawImage(StrikeImage, strikeX, strikeY-60); // Draw the monster
					strike.x = hero.x;
					strike.y = hero.y-60;
				}
				if(strikeType == 1)
				{
					ctx.drawImage(StrikeImage, strikeX, strikeY+80); // Draw the monster
					strike.x = hero.x;
					strike.y = hero.y+80;
				}
				if(strikeType == 2)
				{
					ctx.drawImage(StrikeImage, strikeX+60, strikeY); // Draw the monster
					strike.x = hero.x+60;
					strike.y = hero.y;
				}
				if(strikeType == 3)
				{
					ctx.drawImage(StrikeImage, strikeX-40, strikeY); // Draw the monster
					strike.x = hero.x-40;
					strike.y = hero.y;
				}
				StrikeReady = false;	
			}
			
		}
		
		// ================== Mouvement Monster Strike  ================== //
		if (Monster3StrikeReady)
		{	
			position3 = position3 - (1 * mstrike.speed);
			ctx.drawImage(Monster3StrikeImage, monster3.x, monster3.y+position3); // Draw the monster 2
			mstrike.x = monster3.x;
			mstrike.y = monster3.y+position3;
			if(monster3.y+position3 < 0)
			{
				position3 	= 0;
				Monster3StrikeReady = false;		
			}
			
				
			if (SlashReady)
			{
				ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
			}
			
		}
		if (d_Monster3StrikeReady)
		{	
			d_position3 = d_position3 + (1 * d_mstrike.speed);
			ctx.drawImage(d_Monster3StrikeImage, monster3.x, monster3.y+d_position3); // Draw the monster 2
			d_mstrike.x = monster3.x;
			d_mstrike.y = monster3.y+d_position3;
			if(monster3.y+d_position3 > canvas.height)
			{
				d_position3 	= 0;
				d_Monster3StrikeReady = false;		
			}
			
				
			if (SlashReady)
			{
				ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
			}
		}
		if (l_Monster3StrikeReady)
		{	
			l_position3 = l_position3 + (1 * l_mstrike.speed);
			ctx.drawImage(l_Monster3StrikeImage, monster3.x+l_position3, monster3.y); // Draw the monster 2
			l_mstrike.x = monster3.x+l_position3;
			l_mstrike.y = monster3.y;
			if(monster3.x+l_position3 < 0)
			{
				l_position3 	= 0;
				l_Monster3StrikeReady = false;		
			}
			
				
			if (SlashReady)
			{
				ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
			}
		}
		if (r_Monster3StrikeReady)
		{	
			r_position3 = r_position3 - (1 * r_mstrike.speed);
			ctx.drawImage(r_Monster3StrikeImage, monster3.x+r_position3, monster3.y); // Draw the monster 2
			r_mstrike.x = monster3.x+r_position3;
			r_mstrike.y = monster3.y;
			if(monster3.y+r_position3 > canvas.width)
			{
				r_position3 	= 0;
				r_Monster3StrikeReady = false;		
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