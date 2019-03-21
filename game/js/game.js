	//======================================================================================== //
	// QUENTIN NATER v4.2 (HES-SO)															   //
	// SWORD OF THE JAEGERS																	   //
	// MAIN GAME JS	(LINKED TO : GAME.HTML)													   //
	// LAST UPDATE : 3/15/2019 (NATE)														   //
	//======================================================================================== //
	
	var canvas = document.createElement("canvas"); // Creation of the canvas
	var ctx = canvas.getContext("2d"); // Use the 2d technology
	canvas.width 	= 500; // Define width of the map
	canvas.height 	= 500; // Define height of the map
	document.body.appendChild(canvas); // Use the canvas as a child attribute of body


	// Background image
	var ibgReady = false;
	var ibgImage = new Image();
	ibgImage.onload = function () { ibgReady = true; };

	// Background image
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () { bgReady = true; };
	bgImage.src = "pictures/500_a_History.PNG"; // Background of levels


	
	// Hero image
	var heroReady = false;
	var heroImage = new Image();
	heroImage.onload = function () { heroReady = true; };
	

	
	// =================== MONSTERS DESIGNS =================== //
	// Monster 1 image
	var monsterReady = false;
	var monsterImage = new Image();
	monsterImage.onload = function () { monsterReady = true; };
	monsterImage.src = "pictures/a_slim.PNG"; // Picture of a monster
	 
	// Monster 2 image
	var monster2Ready = false;
	var monster2Image = new Image();
	monster2Image.onload = function () { monster2Ready = true; };
	monster2Image.src = "pictures/a_slim.PNG"; // Picture of a monster
	  
	// Monster 3 image
	var monster3Ready = false;
	var monster3Image = new Image();
	monster3Image.onload = function () { monster3Ready = true; };
	monster3Image.src = "pictures/a_bat.PNG"; // Picture of a monster
	// Monster 4 image
	var monster4Ready = false;
	var monster4Image = new Image();
	monster4Image.onload = function () { monster4Ready = true; };
	monster4Image.src = "pictures/packy.PNG"; // Picture of a monster
	// =================== ============== ======================== //

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
	var hero 			= { speed: 256, hp : 2 }; // movement in pixels per second

	var monster			= { alive:true, hp:3 };
	var monster2		= { alive:true, hp:3 };
	var monster3		= { alive:true, hp:2 };
	var monster4		= { alive:true, hp:4 };
	
	var monsterStrike3	= { power:1 };
	
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

	// Handle keyboard controls
	var keysDown 		= {};

	
	// == LISTENERS == //
	addEventListener("keydown", function (e) { keysDown[e.keyCode] = true;}, false);
	addEventListener("keyup", function (e){ delete keysDown[e.keyCode];}, false);
	// =============== //
	
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
		
		monster4.x = 32 + (Math.random() * (canvas.width  - 128));
		monster4.y = 32 + (Math.random() * (canvas.height - 128));
		
		hero.hp 	= 2;
		monster.hp 	= 3;
		monster2.hp = 3;
		monster2.hp = 2;
		
		monster.alive  = true;
		monster2.alive = true;
		monster3.alive = true;
		monster4.alive = true;
		
		StrikeReady	   = false;
		SlashReady	   = false;
		
		monsterReady   = true;
		monster2Ready  = true;		
		monster3Ready  = true;
		monster4Ready  = true;
		
		
		
		scorePoints = 1000000;
	};

	// Update game objects
	var update = function (modifier)
	{
		
		console.log(backgroundCode);
		
		//if(backgroundCode == 0 || backgroundCode == 1 || backgroundCode == 2)
		//{
			if (48 in keysDown) 
			{ 
				backgroundCode = 0;
			}
			if (49 in keysDown) 
			{ 
				backgroundCode = 1;
			}
			if (50 in keysDown) 
			{ 
				backgroundCode = 2;
			}
			if (51 in keysDown) 
			{ 
				backgroundCode = 3;
			}
		//}
		if(backgroundCode == 3)
		{			
			if (87 in keysDown) 
			{
				backgroundCode = 4;
				heroImage.src = "pictures/a_warrior.PNG"; // Picture of the chosen hero
				myHero=0;		
			}
			if (67 in keysDown) 
			{ 
				backgroundCode = 4;
				heroImage.src = "pictures/a_caster.PNG"; // Picture of the chosen hero
				myHero=1;
			}
			if (80 in keysDown) 
			{ // Player holding up
				backgroundCode = 4;
				heroImage.src = "pictures/a_paladin.PNG"; // Picture of the chosen hero
				myHero=2;
			}
		}
		//if(backgroundCode == 5 || backgroundCode == 6)
		//{	
			if (8 in keysDown) 
			{
				reset();
				backgroundCode = 3;
			}
		//}
		else
		{
			if(backgroundCode == 4)
				scorePoints = scorePoints - 0.01;
			
			if(parseInt(scorePoints) % 3 == 1)
				SlashReady = false;
				
			
				
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
					StrikeImage.src = "pictures/rasengan.PNG"; // Picture of strike
					strikeType 		= 0;
					position 		= 0;
					strikeX			= hero.x;
					StrikeReady 	= true;	
				}
				if (40 in keysDown) 
				{
					StrikeImage.src = "pictures/rasengan.PNG"; // Picture of strike
					strikeType 		= 1;
					position		= 0;
					strikeX			= hero.x;
					StrikeReady 	= true;
				}
				if (39 in keysDown) 
				{
					StrikeImage.src = "pictures/rasengan.PNG"; // Picture of strike
					strikeType 		= 2;
					position 		= 0;
					strikeY			= hero.y;
					StrikeReady 	= true;	
				}
				if (37 in keysDown) 
				{
					StrikeImage.src = "pictures/rasengan.PNG"; // Picture of strike
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
				hero.hp = hero.hp - 1;
				hero.y = hero.y +36;
				scorePoints = scorePoints - 10000;
			}
			
			 // Are they touching?
			if( hero.x <= (monster2.x + 32) &&(monster2.x <= (hero.x + 32) && hero.y <= (monster2.y + 32) && monster2.y <= (hero.y + 32)))							
			{
				hero.hp = hero.hp - 1;
				hero.y = hero.y +36;
				scorePoints = scorePoints - 10000;
			}
			
			 // Are they touching?
			if ( hero.x <= (monster3.x + 32) && ( monster3.x <= (hero.x + 32) && hero.y <= (monster3.y + 32) && monster3.y <= (hero.y + 32)))							
			{
				hero.hp = hero.hp - 1;
				hero.y = hero.y + 36;
				scorePoints = scorePoints - 10000;
			}
			// Are they touching?
			if(hero.x <= (monster4.x + 32) && (monster4.x <= (hero.x + 32) && hero.y <= (monster4.y + 32) && monster4.y <= (hero.y + 32)))							
			{
				hero.hp = hero.hp - 1;
				hero.y = hero.y +36;
				scorePoints = scorePoints - 10000;
			}
			
			if ( strike.x <= (monster.x + 32) && (monster.x <= (strike.x + 32) && strike.y <= (monster.y + 32) && monster.y <= (strike.y + 32))	)						
			{
				SlashReady 		= true;
				
				slashX 			= monster.x;
				slashY 			= monster.y;

				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				monster.hp  = monster.hp - 1;
				
				if(monster.hp<0)
				{
					monster.alive= false;
					monsterReady = false;
					monster.x    = 800;
					scorePoints = scorePoints + 10;
				}
				
				
			}
			if ( strike.x <= (monster2.x + 32) && (monster2.x <= (strike.x + 32) && strike.y <= (monster2.y + 32) && monster2.y <= (strike.y + 32)))							
			{
				SlashReady 	= true;
							
				slashX = monster2.x;
				slashY = monster2.y;
				
				monster2.hp = monster2.hp-1;
				
				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				if(monster2.hp<0)
				{
					monster2.alive 	= false;
					monster2Ready 	= false;
					monster2.x    	= 800;
					scorePoints = scorePoints + 10;
				}
				
			}
			
			if (strike.x <= (monster3.x + 70) && (monster3.x <= (strike.x + 16) && strike.y <= (monster3.y + 70) && monster3.y <= (strike.y + 16)))							
			{
				SlashReady 	= true;
				
				slashX = monster3.x;
				slashY = monster3.y;
				
				monster3.hp  = monster3.hp-1;
				
				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				if(monster3.hp<0)
				{
					monster3.alive 	= false;
					monster3Ready 	= false;
					monster3.x    	= 800;
					scorePoints = scorePoints + 100;
				}
			}
			if (strike.x <= (monster4.x + 70) && (monster4.x <= (strike.x + 16) && strike.y <= (monster4.y + 70) && monster4.y <= (strike.y + 16)))							
			{
				SlashReady 	= true;
				
				slashX = monster4.x;
				slashY = monster4.y;
				
				monster4.hp  = monster4.hp-1;
				
				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				if(monster4.hp<0)
				{
					monster4.alive 	= false;
					monster4Ready 	= false;
					monster4.x    	= 800;
					scorePoints = scorePoints + 100;
				}
			}
				
			if( hero.x <= (mstrike.x + 32) &&(mstrike.x <= (hero.x + 32) && hero.y <= (mstrike.y + 32) && mstrike.y <= (hero.y + 32)))							
			{
				hero.hp = hero.hp - 1;
				hero.y = hero.y + 36;
				scorePoints = scorePoints - 10000;
			}
			if( hero.x <= (d_mstrike.x + 32) &&(d_mstrike.x <= (hero.x + 32) && hero.y <= (d_mstrike.y + 32) && d_mstrike.y <= (hero.y + 32)))							
			{
				hero.hp = hero.hp - 1;
				hero.y = hero.y + 36;
				scorePoints = scorePoints - 10000;
			}
			if( hero.x <= (l_mstrike.x + 32) &&(l_mstrike.x <= (hero.x + 32) && hero.y <= (l_mstrike.y + 32) && l_mstrike.y <= (hero.y + 32)))							
			{
				hero.hp = hero.hp - 1;
				hero.y = hero.y + 36;
				scorePoints = scorePoints - 10000;
			}
			if( hero.x <= (r_mstrike.x + 32) &&(r_mstrike.x <= (hero.x + 32) && hero.y <= (r_mstrike.y + 32) && r_mstrike.y <= (hero.y + 32)))							
			{
				hero.hp = hero.hp - 1;
				hero.y = hero.y + 36;
				scorePoints = scorePoints - 10000;

			}
			
			if(monster.alive == false && monster2.alive == false && monster3.alive == false && monster4.alive == false)
			{
				if(room_level == 1)
				{
					room_level = 2;
				}
				if(room_level == 2)
				{
					room_level = 3;
				}
				if(room_level == 3)
				{
					backgroundCode = 6;
				}
			}
			
			if(hero.hp < 0)
			{
				room_level 		= 1;
				backgroundCode 	= 5;
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
		}	
	};

	// Draw everything
	var render = function () 
	{
		console.log(backgroundCode);
		
						
		if (bgReady) 
			ctx.drawImage(bgImage, 0, 0);

		if(backgroundCode == 0)
			bgImage.src = "pictures/500_introduction.PNG"; // Background of levels	
		if(backgroundCode == 1)
			bgImage.src = "pictures/500_a_History.PNG"; // Background of levels
		if(backgroundCode == 2)
			bgImage.src = "pictures/500_command.PNG"; // Background of levels
		if(backgroundCode == 3)
			bgImage.src = "pictures/500_a_chooseHero.PNG"; // Background of levels
		if(backgroundCode == 5)
		{
			bgImage.src = "pictures/500_back.PNG";

			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Game Over", canvas.width/1.50, canvas.height/2.25); // Display current lifes

			
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "16px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Life 0)", 475, 15); // Display current lifes	
		}
		if(backgroundCode == 6)
		{
			bgImage.src = "pictures/500_back.PNG";

						
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Hall Of Fame", canvas.width/1.42, 50); // Display current lifes


			if(parseInt(scorePoints) > hScore1)
			{								
				ctx.fillStyle = "rgb(250, 250, 250)";
				ctx.font = "20px OCR A Std, monospace";
				ctx.textAlign = "right";
				ctx.textBaseline = "top";
				ctx.fillText("You got the highest score ! - " + parseInt(scorePoints) + "pts", 450, canvas.height/2); // Display current lifes
			}
			else
			{
							
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Your - " + parseInt(scorePoints) + "pts", 350, canvas.height-50); // Display current lifes
			
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Nate - " + hScore1 + "pts", 350, canvas.height/3); // Display current lifes

			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Fade - " + hScore2 + "pts", 350, canvas.height/2); // Display current lifes

			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Plyr - " + hScore3 + "pts", 350, canvas.height/1.5); // Display current lifes

			}
		
		}
		if(backgroundCode == 4)
		{			

		bgImage.src = "pictures/500_background.PNG"; // Background of levels

		if (heroReady) 
			ctx.drawImage(heroImage, hero.x, hero.y); // Draw the hero

		var pos_min = 0; 
		var b1 = false; var b2 = false; var b3 = false;
	
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
		if(Math.random()*100 < chanceToMovePacky)
			b4 = true;
		else
			b4 = false;
		
		if(Math.random()*10 <5)
			pos_min = 1;
		else
			pos_min = -1;
				
		// ================== Mouvement Monster Number 1 ================== //
		if (monsterReady)
		{
			if(b1)
			{
				do
				{
					pos_min = pos_min * -1;				
					monster.x = monster.x + (pos_min * (Math.random() * caseByMovementSlim));
				}
				while(monster.x > canvas.width-100 || monster2.x < 100);
		
				do
				{
					pos_min = pos_min * -1;		
					monster.y = monster.y + (pos_min * (Math.random() * caseByMovementSlim));		
				}
				while(monster.y > canvas.height-100 || monster.y < 100);
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
						pos_min = pos_min * -1;		
						monster2.x = monster2.x + (pos_min * (Math.random() * caseByMovementSlim));
					}
					while(monster2.x > canvas.width-100 || monster2.x < 100);
			
					do
					{
						pos_min = pos_min * -1;		
						monster2.y = monster2.y + (pos_min * (Math.random() *caseByMovementSlim));		
					}
					while(monster2.y > canvas.height-100 || monster2.y < 100);
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
						pos_min = pos_min * -1;		
						monster3.x = monster3.x + (pos_min * (Math.random() * caseByMovementMonster3));
					}
					while(monster3.x > canvas.width-100 || monster3.x < 100);
			
					do
					{
						pos_min = pos_min * -1;		
						monster3.y = monster3.y + (pos_min * (Math.random() * caseByMovementMonster3));		
					}
					while(monster3.y > canvas.height-100 || monster3.y < 100);
			}		
			ctx.drawImage(monster3Image, monster3.x, monster3.y); // Draw the monster 2
		}
		// ================== Mouvement Monster Number 3 ================== //
		if (monster4Ready)
		{
			if(b4)
			{
					do
					{
						pos_min = pos_min * -1;		
						monster4.x = monster4.x + (pos_min * (Math.random() * caseByMovementPacky));
					}
					while(monster4.x > canvas.width-100 || monster4.x < 100);
			
					do
					{
						pos_min = pos_min * -1;		
						monster4.y = monster4.y + (pos_min * (Math.random() * caseByMovementPacky));		
					}
					while(monster4.y > canvas.height-100 || monster4.y < 100);
			}		
			ctx.drawImage(monster4Image, monster4.x, monster4.y); // Draw the monster 4
		}

		// ================== Mouvement Magical Strike HERO ================== //
		if (StrikeReady)
		{	
			
			if(myHero == 1)
			{
				heroStrike();
			}
			else
			{
				heroStrike();
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
				ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
			
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
				ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
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
				ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
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
				ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
		}
		

		
		
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
		
		if(hero.hp == 2)
			ctx.fillText("Life (\u2665 \u2665 \u2665)", 475, 15); // Display current lifes
		else if (hero.hp==1)
			ctx.fillText("Life (\u2665 \u2665)", 475, 15); // Display current lifes
		else
			ctx.fillText("Life (\u2665)", 475, 15); // Display current lifes
		
		ctx.fillStyle = "rgb(250, 250, 250)";
		ctx.font = "16px OCR A Std, monospace";
		ctx.textAlign = "left";
		ctx.textBaseline = "bottom";
		ctx.fillText("Score : " + parseInt(scorePoints), 32, 490);
		
		ctx.fillStyle = "rgb(250, 250, 250)";
		ctx.font = "16px OCR A Std, monospace";
		ctx.textAlign = "right";
		ctx.textBaseline = "bottom";
		ctx.fillText("Level : " + room_level, 470, 490);
		
		}
	};

	
	var heroStrike = function()
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
					ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
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

				
	// Cross-browser support for requestAnimationFrame
	var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

	// Let's play this game!
	var then = Date.now();
	var ithen = Date.now();
	reset();
	main();
	
	//======================================================================================== //
	// END																					   //
	//======================================================================================== //