	//======================================================================================== //
	// QUENTIN NATER v5.3 (HES-SO)															   //
	// SWORD OF THE JAEGERS																	   //
	// MAIN GAME JS	(LINKED TO : GAME.HTML)													   //
	// LAST UPDATE : 5/22/2019 (NATE)														   //
	//======================================================================================== //





	// Nickname of the player
	var nickname = document.getElementById("pseudo");
	
	var level1 = false; // Current level
	var level2 = false; // Current level
	var level3 = false; // Current level

    var p = 0;
	
	//===================================================================== //
	// Music and sound of the game											//
	//===================================================================== //
	historia 				= new sound("musics/intro.mp3");
	swordofthejaegers 		= new sound("musics/swordland.mp3");
	boss 					= new sound("musics/confrontbattle.mp3");
    chauve_souris           = new sound ("musics/chauve_souris.mp3");
    epee                    = new sound ("musics/epee.mp3");
    game_over               = new sound ("musics/game_over.mp3");
    cri_dragon              = new sound ("musics/cri_dragon_2.mp3");
    monstre_vert            = new sound ("musics/monstre_vert.mp3");
    elec                    = new sound ("musics/tir_electrique2.mp3");
    hurt                    = new sound ("musics/degat.mp3");
	cast                    = new sound ("musics/sort_magique.mp3");
    dragon_hurt             = new sound ("musics/dragon_degat");
	//===================================================================== //
	
	// Volume of the music
	var volume 				= true;
	
	var canvas = document.createElement("canvas"); // Creation of the canvas
	var ctx = canvas.getContext("2d"); // Use the 2d technology
	canvas.width 	= 500; // Define width of the map
	canvas.height 	= 500; // Define height of the map
	document.body.appendChild(canvas); // Use the canvas as a child attribute of body

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
	// Monster 1 & 2 image
	var monsterReady = false;	var monster2Ready = false;
	
	var slimeImage = new Image();
	slimeImage.onload = function () { monster2Ready = true; monsterReady = true; };
	slimeImage.src = "pictures/a_slim.PNG"; // Picture of a monster
	  
	// Monster 3 image
	var monster3Ready = false;
	var batImage = new Image();
	batImage.onload = function () { monster3Ready = true; };
	batImage.src = "pictures/a_bat.PNG"; // Picture of a monster
	
	// Monster 4 & 5 image
	var monster4Ready = false;  var monster5Ready = false;
	var packyImageRight = new Image();
	packyImageRight.onload = function () { monster4Ready = true; monster5Ready = true;};
	packyImageRight.src = "pictures/packy.PNG"; // Picture of a monster
    
	var packyImageLeft = new Image();
	packyImageLeft.onload = function () { monster4Ready = true; monster5Ready = true;};
	packyImageLeft.src = "pictures/packyLeft.PNG"; // Picture of a monster
    
    var packyImageUp = new Image();
	packyImageUp.onload = function () { monster4Ready = true; monster5Ready = true;};
	packyImageUp.src = "pictures/packyUp.PNG"; // Picture of a monster

    var packyImageDown = new Image();
	packyImageDown.onload = function () { monster4Ready = true; monster5Ready = true;};
	packyImageDown.src = "pictures/packyDown.PNG"; // Picture of a monster

    // Dragon image
	var dragonReady = false;
	var dragonImage = new Image();
	dragonImage.onload = function () { dragonReady = true; };
	dragonImage.src = "pictures/a_dragon.PNG"; // Picture of a dragon
    //hitbox
	var hitboxImage = new Image();
	hitboxImage.src = "pictures/Hitbox.PNG"; // Picture of a dragon

	// =================== OBSTACLE iMAGES ======================== //
// flame image
	var flameReady = false;
	var flameImage = new Image();
	flameImage.onload = function () { flameReady = true; flame2Ready = true;  flame3Ready = true; flame4Ready = true; flame5Ready = true;  flame6Ready = true; flame7Ready = true; flame8Ready = true; flame9Ready = true;};
	flameImage.src = "pictures/flame.PNG"; // Picture of a flame
    
    var flameReverseImage = new Image();
	flameReverseImage.onload = function () {flameReady = true; flame2Ready = true;  flame3Ready = true; flame4Ready = true; flame5Ready = true;  flame6Ready = true; flame7Ready = true; flame8Ready = true; flame9Ready = true; };
	flameReverseImage.src = "pictures/flameReverse.PNG"; // Picture of a dragon
	// =================== HERO STRIKES DESIGNS =================== //
	// Strike mode
	var StrikeReady = false;
	var StrikeImage = new Image();
	
	
	// =================== Geolocalisation =================== //
    function onSuccess(position)
    {
        var lat= position.coords.latitude; // Latitude
        var long= position.coords.longitude; // Longitude

        if ((lat>=45.828465)&&(lat<=48.96667)){ // If it is in CH
               if ((long>=5.971636) && (long<=10.492014)){ // If it's in CH
                   country = "SUI"
               }                  
               else  country = "EXT"; // Other country
           }else  country = "EXT"; // Other Country
    }            
            
    function onError(error) { country = "UKN"; } // Error            
            // Geolocalisation
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
                
    console.log(country);
    // =================== ============== ======================== //
 
    var PowerOfGods = new Image();
    var PowerOfGodsReady = true;
    PowerOfGods.onload = function () { PowerOfGodsReady = true; };
    PowerOfGods.src = "pictures/powerOfGods.PNG"; // Picture of a monster

	// =================== ============== ======================== //
	
	// =================== MONSTER STRIKES DESIGNS =============== //
	
	// =================== MONSTER   BAT   DESIGNS =============== //
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
    
	
	// =================== MONSTER  DRAGON  DESIGNS =============== //
	// Strike mode
	var Dragon_0_StrikeReady 	= false;
	var Dragon_45_StrikeReady 	= false;
	var Dragon_90_StrikeReady 	= false;
	var Dragon_135_StrikeReady 	= false;
	var Dragon_180_StrikeReady 	= false; 
	var Dragon_225_StrikeReady 	= false;
	var Dragon_270_StrikeReady 	= false;
	var Dragon_315_StrikeReady 	= false;	
	var dragon_StrikeImage = new Image();
	dragon_StrikeImage.src = "pictures/dragon_ball.PNG"; // Picture of a strike
	
	// Strike mode
	var Dragon_Barrier_StrikeReady = false;
	var Dragon_Barrier_StrikeImage = new Image();
	Dragon_Barrier_StrikeImage.src = "pictures/400_i_magicalSquare.PNG"; // Picture of a strike
	
	// =================== MONSTER SLASHES DESIGNS =============== //
	// Slash mode
	var SlashReady = false;
	var SlashImage = new Image();
	SlashImage.src = "pictures/slash.PNG"; // Picture of a monster
	  

	// =================== ======================== =============== //
	// Game objects
	// =================== ======================== =============== //
	var hero 			= { speed: 2560, hp : life_hero }; // movement in pixels per second
    var powerofgods     = false;

	var monster			= { alive:true, hp:life_slim };
	var monster2		= { alive:true, hp:life_slim };
	var monster3		= { alive:true, hp:life_bat };
	var monster4		= { alive:true, hp:life_packy };
    var monster5		= { alive:true, hp:life_packy };
	var dragon			= { alive:true, hp:life_dragon };

    var flame			= { alive:true};
    var flame2			= { alive:true};
    var flame3			= { alive:true};
    var flame4			= { alive:true};
    var flame5			= { alive:true};
    var flame6			= { alive:true};
    var flame7			= { alive:true};
    var flame8			= { alive:true};
    var flame9			= { alive:true};

	var monsterStrike3	= { power:1 };
	// =================== ======================== =============== //

	// Wound location
	var slashX			= 0;
	var slashY			= 0;
	
	// ==== Strike HERO ==== //
	var strike			= { speed: 5 };
	var strikeX			= 0;
	var strikeY			= 0;
	var position		= 0;
	var strikeType		= 0;
	
	
	// ============================================================ //
	// BAT Strike												    //
	// ============================================================ //
	// ==== Strike Bat (TOP) ==== //
	var mstrike			= { speed: monsterStrikeSpeed };
	var position3		= 0;
	
	// ==== Strike Bat (BOT) ==== //
	var d_mstrike		= { speed: monsterStrikeSpeed };
	var d_position3		= 0;
	
	// ==== Strike Bat (LEF) ==== //
	var l_mstrike		= { speed: monsterStrikeSpeed };
	var l_position3		= 0;
	
	// ==== Strike Bat (RIG) ==== //
	var r_mstrike		= { speed: monsterStrikeSpeed };
	var r_position3		= 0;
	// ============================================================ //
	
	// ============================================================ //
	// DRAGOM Strike												    //
	// ============================================================ //
	// ==== Strike DRAGON (0 degrÃ©) ==== //
	var d_0_strike		= { speed: dragonStrikeSpeed };
	var d_0_position	= 0;
	
	// ==== Strike DRAGON (45 degrÃ©) ==== //
	var d_45_strike		= { speed: dragonStrikeSpeed };
	var d_45_position	= 0;
	
	// ==== Strike DRAGON (90 degrÃ©) ==== //
	var d_90_strike		= { speed: dragonStrikeSpeed };
	var d_90_position	= 0;
	
	// ==== Strike DRAGON (135 degrÃ©) ==== //
	var d_135_strike	= { speed: dragonStrikeSpeed };
	var d_135_position	= 0;
	
	// ==== Strike DRAGON (180 degrÃ©) ==== //
	var d_180_strike	= { speed: dragonStrikeSpeed };
	var d_180_position	= 0;
	
	// ==== Strike DRAGON (225 degrÃ©) ==== //
	var d_225_strike	= { speed: dragonStrikeSpeed };
	var d_225_position	= 0;
	
	// ==== Strike DRAGON (270 degrÃ©) ==== //
	var d_270_strike	= { speed: dragonStrikeSpeed };
	var d_270_position	= 0;
			
	// ==== Strike DRAGON (315 degrÃ©) ==== //
	var d_315_strike	= { speed: dragonStrikeSpeed };
	var d_315_position	= 0;
	
	// ==== Strike DRAGON (315 degrÃ©) ==== //
	var d_barrier_strike	= { speed: dragonStrikeSpeed };
	var d_barrier_position	= 0;

	// ============================================================ //

	// Handle keyboard controls
	var keysDown 		= {};

	
	// == LISTENERS == //
	addEventListener("keydown", function (e) { keysDown[e.keyCode] = true;}, false);
	addEventListener("keyup", function (e){ delete keysDown[e.keyCode];}, false);
	// =============== //
	
	// Reset the game when the player catches a monster
	var reset = function () 
	{
		hero.x = 215;
		hero.y = 385 ;
        
        var over = false;
       
		// Throw the monster somewhere on the screen randomly
		monster.x = 32 + (Math.random() * (canvas.width  - 128));
		monster.y = 12 + (Math.random() * (canvas.height/2));
		
		monster2.x = 32 + (Math.random() * (canvas.width  - 128));
		monster2.y = 12 + (Math.random() * (canvas.height/2));
		
		monster3.x = 32 + (Math.random() * (canvas.width  - 128));
		monster3.y = 12 + (Math.random() * (canvas.height/2));
	
		monster4.x = 32 + (Math.random() * (canvas.width  - 128));
		monster4.y = 12 + (Math.random() * (canvas.height/2));
        
        monster5.x = 32 + (Math.random() * (canvas.width  - 128));
		monster5.y = 12 + (Math.random() * (canvas.height/2));

		// The position of the dragon is fix
		dragon.x = (canvas.width/2) + 50;
		dragon.y = 50;
		
        //All flames positions
        flame.x = 135;
		flame.y = 125;
        
        flame2.x = 235;
		flame2.y = 125;
        
        flame3.x = 335;
		flame3.y = 125;
        
        flame4.x = 135;
		flame4.y = 225;
        
        flame5.x = 235;
		flame5.y = 225;
        
        flame6.x = 335;
		flame6.y = 225;
        
        flame7.x = 135;
		flame7.y = 325;
        
        flame8.x = 235;
		flame8.y = 325;
        
        flame9.x = 335;
		flame9.y = 325;
		//--------------------//	
		hero.hp 	= 2;
		monster.hp 	= 3;
		monster2.hp = 3;
		monster3.hp = 2;
		monster4.hp = 4;
        monster5.hp = 4;
		dragon.hp   = 10;
		
		// Monsters are alive
		monster.alive  = true;
		monster2.alive = true;
		monster3.alive = true;
		monster4.alive = true;
        monster5.alive = true;
		dragon.alive   = true;
		
		StrikeReady	   = false;
		SlashReady	   = false;
		
		// Monsters are enabled
		monsterReady   = true;
		monster2Ready  = true;		
		monster3Ready  = true;
		monster4Ready  = true;
        monster5Ready  = true;
		dragonReady	   = true;
		
		// The game is not started
		level1		   = false;
		level2		   = false;
		level3		   = false;

		// Start with the first room
		room_level	   = 1;
	
		// All the score points
		scorePoints = 1000000;
        
	};

	// Function which sets the variable of the pseudo by the URL
	function getQueryVariable(variable)
	{
		   var query = window.location.search.substring(1);
		   var vars = query.split("&");
		   for (var i=0;i<vars.length;i++)
		   {
				   var pair = vars[i].split("="); // Split after the "="
				   if(pair[0] == variable){return pair[1];}
		   }
		   return(false);
	}

	// Update game objects
	var update = function (modifier)
	{
     	nickname = getQueryVariable('pseudo'); // Call the getQueryVariable to have the pseudo
        
        
		if(nickname == null || nickname == false) // If the user does not write a nickname
			nickname = "PL1";
        
        if (nickname.length > 7); // Limitation of the number of letters
            nickname = nickname.substring(0, 7)
        
        for (i = nickname.length; i < 7; i++) 
            {
               nickname = nickname + ' '; 
            }
       
        
		// key return <-- //
		if (8 in keysDown) 
		{
			reset();
			backgroundCode = 3; // choice of the hero page
		}
		
		
		// If it's the new level page
		if(backgroundCode == 7)
		{
			if (27 in keysDown) 
			{ 
				// Room number 2 -> monster 4 and 5
				if(room_level == 2)
				{
					backgroundCode = 4; // battle field
					monster4Ready = true;
                    monster5Ready = true;
                    	
				}				
				else if(room_level == 3) // Room number 3 -> boss
				{
                    p++;
                    
                    if(p==1) // Scream only one time
                        cri_dragon.play();
                    
					backgroundCode = 4;
					dragonReady = true;							
				}
			}
		}
				
		if (48 in keysDown)  // key 0
			backgroundCode = 0; // Introduction
		if (49 in keysDown)  // key 1
			backgroundCode = 1; // Hitory
		if (50 in keysDown)  // key 2
			backgroundCode = 2; // Commandes
		if (51 in keysDown)  // key 3
			backgroundCode = 3; // Hero
        if (90 in keysDown)
            backgroundCode = 6;
		
		// only in the hero page
		if(backgroundCode == 3)
		{			
			if (87 in keysDown) 
			{
				backgroundCode = 4;
				heroImage.src = "pictures/a_warrior.PNG"; // Picture of the chosen hero
				myHero=0;		
			}
			else if (67 in keysDown) 
			{ 
				backgroundCode = 4;
				heroImage.src = "pictures/a_caster.PNG"; // Picture of the chosen hero
				myHero=1;
			}
			else if (80 in keysDown) 
			{ 
				backgroundCode = 4;
				heroImage.src = "pictures/a_paladin.PNG"; // Picture of the chosen hero
				myHero=2;
			}
		}

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
		
		// key m -> kill/allow the sound		
		if (77 in keysDown) 
		{
			if(volume)
			{
				swordofthejaegers.stop();
				boss.stop(); // Kill
				volume = false;
			}
			else
			{
				swordofthejaegers.play();
				boss.play(); // Play
				volume = true;
				
			}
		}

		// Lose points because of the time
		if(backgroundCode == 4)
			scorePoints = scorePoints - 0.01;
		
		// Disable all slahes images all multiple of 3
		if(parseInt(scorePoints) % 3 == 1)
			SlashReady = false;
				
		// If it is the caster
		if(myHero == 1)
		{
			StrikeImage.src = "pictures/rasengan.PNG"; // Picture of strike
				
			// Direction of the strike
			if (38 in keysDown) 
			{
				strikeType 		= 0;
				position 		= 0;
				strikeX			= hero.x;
				StrikeReady 	= true;	
			}
			if (40 in keysDown) 
			{
				strikeType 		= 1;
				position		= 0;
				strikeX			= hero.x;
				StrikeReady 	= true;
			}
			if (39 in keysDown) 
			{
				strikeType 		= 2;
				position 		= 0;
				strikeY			= hero.y;
				StrikeReady 	= true;	
			}
			if (37 in keysDown) 
			{
				strikeType 		= 3;
				position		= 0;
				strikeY			= hero.y;
				StrikeReady 	= true;
			}
		}
		else // If it is the warrior or the paladin
		{
			 
			ctx.drawImage(hitboxImage, hero.x, hero.y);
				
			// Strike Direction
			if (38 in keysDown) //key up
			{
                StrikeImage.src = "pictures/a_swordUp.PNG"; // Picture of strike
				strikeType 		= 0;
				strikeX			= hero.x + 10;
				strikeY			= hero.y + 15;
				StrikeReady 	= true;	
			}
			if (40 in keysDown) //key down
			{
                StrikeImage.src = "pictures/a_swordDown.PNG"; // Picture of strike
				strikeType 		= 1;
				strikeX			= hero.x + 10;
				strikeY			= hero.y - 25;
				StrikeReady 	= true;
			}
			if (39 in keysDown) //key right
			{
                StrikeImage.src = "pictures/a_swordRight.PNG"; // Picture of strike
				strikeType 		= 2;
				strikeX			= hero.x - 25;
				strikeY			= hero.y + 28;
				StrikeReady 	= true;	
			}
			if (37 in keysDown) //key left
			{
                StrikeImage.src = "pictures/a_swordLeft.PNG"; // Picture of strike
				strikeType 		= 3;
				strikeX			= hero.x + 2;
				strikeY			= hero.y + 28;				
				StrikeReady 	= true;
			}
		}

		// ROOM NUMBER ONE
		if(room_level == 1)
		{			
			// Are they touching?
			GetTouchedByMonster(monster, slimeHitboxWidth, slimeHitboxHeight, heroHitboxWidth, heroHitboxHeight, lostPoints);
            
			
			 // Are they touching?
			GetTouchedByMonster(monster2, slimeHitboxWidth, slimeHitboxHeight, heroHitboxWidth, heroHitboxHeight, lostPoints);
			
			 // Are they touching?
			GetTouchedByMonster(monster3, batHitboxWidth, batHitboxHeight, heroHitboxWidth, heroHitboxHeight,lostPoints);
		
			// Is the strike touch the monster
			if (strike.x <= (monster.x + 32) && (monster.x <= (strike.x + 32) && strike.y <= (monster.y + 32) && monster.y <= (strike.y + 32))	)						
			{
                monstre_vert.play(); // Hurt sound
				SlashReady 		= true; // Hurt image
				
				slashX 			= monster.x; // Position of the hurt
				slashY 			= monster.y; // Position of the hurt

				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				monster.hp  = monster.hp - 1; // Lose health points
				
				if(monster.hp<0) // if the monster is dead
				{
					monster.alive= false;
					monsterReady = false;
					monster.x    = 800;
					scorePoints = scorePoints + 1; // Win point on the score
				}
				
				
			}
			if (strike.x <= (monster2.x + 32) && (monster2.x <= (strike.x + 32) && strike.y <= (monster2.y + 32) && monster2.y <= (strike.y + 32)))							
			{
                monstre_vert.play(); // Hurt sound                
				SlashReady 	= true; // Hurt image
							
				slashX = monster2.x; // Position of the hurt
				slashY = monster2.y; // Position of the hurt
				
				monster2.hp = monster2.hp-1; // Lose health points
				
				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				if(monster2.hp<0) // if the monster is dead
				{
					monster2.alive 	= false;
					monster2Ready 	= false;
					monster2.x    	= 800;
					scorePoints = scorePoints + 1; // Win point on the score
				}
				
			}
			if (strike.x <= (monster3.x + 70) && (monster3.x <= (strike.x + 16) && strike.y <= (monster3.y + 70) && monster3.y <= (strike.y + 16)))							
			{
				SlashReady 	= true; // Hurt image
				
				slashX = monster3.x; // Position of the hurt
				slashY = monster3.y; // Position of the hurt
				
				monster3.hp  = monster3.hp-1; // Lose health points
				
				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				if(monster3.hp<0) // if the monster is dead
				{
					monster3.alive 	= false;
					monster3Ready 	= false;
					monster3.x    	= 800;
					scorePoints = scorePoints + 2; // Win point on the score
				}
			}
			
							
			if( hero.x <= (mstrike.x + 32) &&(mstrike.x <= (hero.x + 32) && hero.y <= (mstrike.y + 32) && mstrike.y <= (hero.y + 32)))							
				lostPoints(); // Hero is touched by an attack
			
			if( hero.x <= (d_mstrike.x + 32) &&(d_mstrike.x <= (hero.x + 32) && hero.y <= (d_mstrike.y + 32) && d_mstrike.y <= (hero.y + 32)))							
				lostPoints(); // Hero is touched by an attack
			
			if( hero.x <= (l_mstrike.x + 32) &&(l_mstrike.x <= (hero.x + 32) && hero.y <= (l_mstrike.y + 32) && l_mstrike.y <= (hero.y + 32)))							
				lostPoints(); // Hero is touched by an attack
			
			if( hero.x <= (r_mstrike.x + 32) &&(r_mstrike.x <= (hero.x + 32) && hero.y <= (r_mstrike.y + 32) && r_mstrike.y <= (hero.y + 32)))							
				lostPoints(); // Hero is touched by an attack
			
			
			// If the monsters from the level are dead
			if(monster.alive == false && monster2.alive == false && monster3.alive == false && level1 == false)
			{
				if(room_level == 1) // Initionalisation
                    hero.x = 215;
                    hero.y = 385;
					room_level = 2;
				
				monster4Ready  = false;						
				backgroundCode = 7; // Next level page
				level1 		   = true;
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
		else if(room_level == 2)
		{
            //flames dissapear when the hero touches it
           burnt(flame, flameReady);
           burnt(flame2, flame2Ready);
           burnt(flame3, flame3Ready);
           burnt(flame4, flame4Ready);
           burnt(flame5, flame5Ready);
           burnt(flame6, flame6Ready);
           burnt(flame7, flame7Ready);
           burnt(flame8, flame8Ready);
           burnt(flame9, flame9Ready);
           
            //-----------------------------------------------------------------------------------------------------------------------------//
            //-------------------------------------------------------------------------------------------------------------------------------//
			// Are they touching?
			GetTouchedByMonster(monster4, packyHitbox, packyHitbox, heroHitboxWidth, heroHitboxHeight, lostPoints);
            
            GetTouchedByMonster(monster5, packyHitbox, packyHitbox, heroHitboxWidth, heroHitboxHeight, lostPoints);
            
                
			
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
					scorePoints = scorePoints + 3;
				}
			}
            
            if (strike.x <= (monster5.x + 70) && (monster5.x <= (strike.x + 16) && strike.y <= (monster5.y + 70) && monster5.y <= (strike.y + 16)))							
			{
				SlashReady 	= true;
				
				slashX = monster5.x;
				slashY = monster5.y;
				
				monster5.hp  = monster5.hp-1;
				
				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				if(monster5.hp<0)
				{
					monster5.alive 	= false;
					monster5Ready 	= false;
					monster5.x    	= 800;
					scorePoints = scorePoints + 3;
				}
			}
			if(monster4.alive == false && monster5.alive == false && level2 == false)
			{
				if(room_level == 2)
					room_level = 3;
				
				backgroundCode = 7;
				level2		   = true;
				dragonReady	   = false;
			}
		}
		else if(room_level == 3)
		{
							
			if( hero.x <= (d_0_strike.x + 32) &&(d_0_strike.x <= (hero.x + 32) && hero.y <= (d_0_strike.y + 32) && d_0_strike.y <= (hero.y + 32)))							
				lostPoints();
			
			if( hero.x <= (d_45_strike.x + 32) &&(d_45_strike.x <= (hero.x + 32) && hero.y <= (d_45_strike.y + 32) && d_45_strike.y <= (hero.y + 32)))							
				lostPoints();
			
			if( hero.x <= (d_90_strike.x + 32) &&(d_90_strike.x <= (hero.x + 32) && hero.y <= (d_90_strike.y + 32) && d_90_strike.y <= (hero.y + 32)))							
				lostPoints();
			
			if( hero.x <= (d_135_strike.x + 32) &&(d_135_strike.x <= (hero.x + 32) && hero.y <= (d_135_strike.y + 32) && d_135_strike.y <= (hero.y + 32)))							
				lostPoints();
			
			if( hero.x <= (d_180_strike.x + 32) &&(d_180_strike.x <= (hero.x + 32) && hero.y <= (d_180_strike.y + 32) && d_180_strike.y <= (hero.y + 32)))							
				lostPoints();
			
			if( hero.x <= (d_225_strike.x + 32) &&(d_225_strike.x <= (hero.x + 32) && hero.y <= (d_225_strike.y + 32) && d_225_strike.y <= (hero.y + 32)))							
				lostPoints();
			
			if( hero.x <= (d_270_strike.x + 32) &&(d_270_strike.x <= (hero.x + 32) && hero.y <= (d_270_strike.y + 32) && d_270_strike.y <= (hero.y + 32)))							
				lostPoints();
			
			if( hero.x <= (d_315_strike.x + 32) &&(d_315_strike.x <= (hero.x + 32) && hero.y <= (d_315_strike.y + 32) && d_315_strike.y <= (hero.y + 32)))							
				lostPoints();
			
			if( hero.x <= (d_barrier_strike.x + 300) &&(d_barrier_strike.x <= (hero.x + 32) && hero.y <= (d_barrier_strike.y + 300) && d_barrier_strike.y <= (hero.y + 32)))							
			{
				hero.hp = hero.hp - 0.1;
				hero.x = hero.x + 36;
				hero.y = hero.y + 36;
				scorePoints = scorePoints - 1000;
			}
			
			// Are they touching?
			if(hero.x <= (dragon.x + 32) && (dragon.x <= (hero.x + 32) && hero.y <= (dragon.y + 32) && dragon.y <= (hero.y + 32)))							
				lostPoints();
			
			if (strike.x <= (dragon.x + 70) && (dragon.x <= (strike.x + 16) && strike.y <= (dragon.y + 70) && dragon.y <= (strike.y + 16)))							
			{
				dragon_hurt.play();

				SlashReady 	= true;
				
				slashX = dragon.x;
				slashY = dragon.y;
				
				dragon.hp  = dragon.hp-1;
				
				strike.x 	= 1000;
				position 	= 0;
				StrikeReady = false;
				
				if(dragon.hp<0)
				{
					dragon.alive 	= false;
					dragonReady 	= false;
					dragon.x    	= 800;
					scorePoints = scorePoints + 1;
				}
			}
			if(dragon.alive == false && level3 == false)
			{
				if(room_level == 3)
					room_level = 4;
				
				backgroundCode 	= 6;
				level3 			= true;
	
				if(myHero != 1)
					scorePoints = scorePoints +2;
			}
			
					
			// STRIKE DIFFICULTY
			if(Math.random()*1000<chanceToStrikeDragon && dragon.alive)
			{				
                elec.play();
				Dragon_0_StrikeReady 	= true;
				Dragon_45_StrikeReady 	= true;
				Dragon_90_StrikeReady 	= true;
				Dragon_135_StrikeReady 	= true;
				Dragon_180_StrikeReady 	= true;
				Dragon_225_StrikeReady 	= true;
				Dragon_270_StrikeReady 	= true;
				Dragon_315_StrikeReady 	= true;
				
				d_0_position 	= 0;
				d_45_position 	= 0;
				d_90_position 	= 0;
				d_135_position 	= 0;
				d_180_position 	= 0;
				d_225_position 	= 0;
				d_270_position 	= 0;
				d_315_position 	= 0;				
			}
			
			// DEFENSE DIFFICULTY
			if(Math.random()*1000<chanceToDefenseDragon && dragon.alive)
			{
				Dragon_Barrier_StrikeReady 	= true;
				d_barrier_position 			= 0;	
			}
		}

		// If the hero is killed
		if(hero.hp < 0)
		{
			room_level 		= 1; // Reset the room level
			backgroundCode 	= 5; // Game over page
		}
	}

	// ======================================================================================================== //
	// Draw everything
	var render = function () 
	{	

		if(backgroundCode != 1)
			historia.stop(); // Stop the sound of the history
		
		// Stop sounds
		if(backgroundCode != 4)
		{
			swordofthejaegers.stop();
			boss.stop();
		}
				
		// ====================================================================================	//
		// Draw differents backgrounds 															//
		// ====================================================================================	//
		if (bgReady) 
			ctx.drawImage(bgImage, 0, 0);
		if(backgroundCode == 0)
			bgImage.src = "pictures/500_introduction.JPG"; // Background of levels	
		else if(backgroundCode == 1)
		{
            bgImage.src = "pictures/500_a_history.JPG"; // Background of levels	

			ctx.drawImage(bgImage, 0, 0);
			historia.play(); // Play the history explanation
		}
		else if(backgroundCode == 2)
			bgImage.src = "pictures/500_command.JPG"; // Background of levels
		else if(backgroundCode == 3)
			bgImage.src = "pictures/500_a_chooseHero.JPG"; // Background of levels
		else if(backgroundCode == 5)
		{
            
			bgImage.src = "pictures/500_back.JPG";

			ctx.fillStyle = "red";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Game Over", canvas.width/1.50, canvas.height/1.25); // Display current lifes
			
			ctx.fillStyle = "red";
			ctx.font = "16px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Life 0)", 475, 15); // Display current lifes	
		}
		else if(backgroundCode == 7)
		{
			bgImage.src = "pictures/b_500_back.JPG";

			ctx.fillStyle = "red";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Next Level : " + room_level, canvas.width/1.35, canvas.height/1.25); // Display current lifes
			
			ctx.fillStyle = "red";
			ctx.font = "16px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Press the esc key", 475, 15); // Display current lifes	
		}
		else if(backgroundCode == 6) // HALL OF FAME
		{
            
            //store the score if it's an highscore
            if (typeof(Storage) !== "undefined") 
            {
                if (scorePoints > all_might_storage[0].score) // High Score
                {
                    previousScore = all_might_storage[0].score;  // SAVE DATA
                    previousNickname = all_might_storage[0].name; // SAVE DATA
                    previousCountry = all_might_storage[0].land; // SAVE DATA

                    all_might_storage[0].name = nickname; // REPLACE DATA
                    all_might_storage[0].score = scorePoints; // REPLACE DATA
                     all_might_storage[0].land = country; // REPLACE DATA

                    nickname = previousNickname; // RESTORE DATA
                    scorePoints = previousScore; // RESTORE DATA
                    country = previousCountry; // RESTORE DATA
                }
                for (i = 1; i < all_might_storage.length; i++)
                {
                   if (scorePoints > all_might_storage[i].score && scorePoints < all_might_storage[i-1].score)
                    {   //replace the previous highscore
                    previousScore = all_might_storage[i].score;  // SAVE DATA
                    previousNickname = all_might_storage[i].name; // SAVE DATA
                    previousCountry = all_might_storage[i].land; // SAVE DATA

                    all_might_storage[i].name = nickname; // REPLACE DATA
                    all_might_storage[i].score = scorePoints; // REPLACE DATA
                     all_might_storage[i].land = country; // REPLACE DATA

                    nickname = previousNickname; // RESTORE DATA
                    scorePoints = previousScore; // RESTORE DATA
                    country = previousCountry; // RESTORE DATA
                    }
                    
                }
                
                //store highscores        
                localStorage.setItem("all_might_storage", JSON.stringify(all_might_storage)); // Save the 
                all_might_storage = JSON.parse(localStorage.getItem("all_might_storage")); // Get the array 
            } 
            else 
            {
              console.log("Error: your score can't be stored in this browser")
            }
            
			bgImage.src = "pictures/500_back_old.JPG";

						
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "32px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			ctx.fillText("Hall Of Fame", canvas.width/1.42, 50); // Display Hall of fame


            // display all highScores
            for (i = 0; i < all_might_storage.length; i++)
            {
                ctx.fillStyle = "rgb(250, 250, 250)";
                ctx.font = "28px OCR A Std, monospace";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                
                // Display of the local storage
                ctx.fillText(all_might_storage[i].name + " - " + parseInt(all_might_storage[i].score) + " pts " + all_might_storage[i].land, 12, canvas.height/4 + (i*30)); 
            }
            
		
		}
		else 
		{
			// Stop or start the sounds
			if(room_level == 3)
			{
				if(volume)
				{
					swordofthejaegers.stop();
					boss.play();
				}
			}
			else
			{
				if(volume)
				{
					swordofthejaegers.play();
					boss.stop();
				}
			}
	
			if(level2)
				bgImage.src = "pictures/500_test.JPG"; // Background of levels
			else
				bgImage.src = "pictures/500_background.JPG"; // Background of levels
			
			if (heroReady) 
				ctx.drawImage(heroImage, hero.x, hero.y); // Draw the hero

			// ================== Mouvement Magical Strike HERO ================== //
			if (StrikeReady)	
				heroStrike();
		
			if(room_level == 1)
			{
                resetHeroPosition = true;
                resetHeroPosition2 = true;
				monster4Ready 	= false;
				dragonReady		= false;
				
				
						
				// ================== Mouvement Monster Number 1 ================== //
				if (monsterReady)
				{
                    pusrsuitPattern(monster, slimeImage, slimeImage, slimeImage, slimeImage)
				}
				
				// ================== Mouvement Monster Number 2 ================== //
				if (monster2Ready)
				{
                    getRandomProbability();

                    if (probability > goSameWay)
                    {
                        direction2 = parseInt(Math.random()*4)+1;
                    } 
                    if (monster2.y < 45)
                        direction2 = 2;
                    if (monster2.y > 405)
                        direction2 = 1;
                     if (monster2.x < 55)
                        direction2 = 4;
                    if (monster2.x > 415)
                        direction2 = 3;
                    randomMove(monster2, slimeImage, slimeImage, slimeImage, slimeImage, direction2);
                }
				
				// ================== Mouvement Monster Number 3 ================== //
				if (monster3Ready)
				{
                   
                    getRandomProbability();
                        
                     if (probability > goSameWay)
                        {
                            direction3 = parseInt(Math.random()*4)+1;
                        } 
                    //changes direction if it's out of boudaries
                    if (monster3.y < 45)
                        direction3 = 2;
                    if (monster3.y > 405)
                        direction3 = 1;
                    if (monster3.x < 55)
                        direction3 = 4;
                    if (monster3.x > 415)
                        direction3 = 3;
                    randomMove(monster3, batImage, batImage, batImage, batImage, direction3);
                     
				}
				// ================== Mouvement Monster Strike  ================== //
                
                if(Monster3StrikeReady)
                    chauve_souris.play();
                    
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
				}
                
			}
			else if(room_level == 2)
			{
                //reset hero position
                if(resetHeroPosition){
                hero.x = 215;
                hero.y = 385;
                }
                
                resetHeroPosition = false;
                
				monsterReady 	= false;
				monster2Ready 	= false;
				monster3Ready 	= false;
				dragonReady 	= false;
                
                displayFlames(flame, flameImage, flameReverseImage);
                displayFlames(flame2, flameImage, flameReverseImage);
                displayFlames(flame3, flameImage, flameReverseImage);
                displayFlames(flame4, flameImage, flameReverseImage);
                displayFlames(flame5, flameImage, flameReverseImage);
                displayFlames(flame6, flameImage, flameReverseImage);
                displayFlames(flame7, flameImage, flameReverseImage);
                displayFlames(flame8, flameImage, flameReverseImage);
                displayFlames(flame9, flameImage, flameReverseImage);
                
               
                   
                
				
				
				// ================== Mouvement Monster Number 4 && 5 ================== //
				if (monster4Ready)
				{
				    pusrsuitPattern(monster4, packyImageUp, packyImageDown, packyImageLeft, packyImageRight);
				}
                if (monster5Ready)
				{ 
                        getRandomProbability();
                    if (probability > goSameWay)
                    {
                        direction5 = parseInt(Math.random()*4)+1;
                    }
                    if (monster5.y < 45)
                        direction5 = 2;
                    if (monster5.y > 405)
                        direction5 = 1;
                     if (monster5.x < 55)
                        direction5 = 4;
                    if (monster5.x > 415)
                        direction5 = 3;
                    randomMove(monster5, packyImageUp, packyImageDown, packyImageLeft, packyImageRight, direction5);
                }
			 }
			else if(room_level == 3)
			{
                //reset hero position
                if(resetHeroPosition2){
                hero.x = 215;
                hero.y = 385;
                }
                resetHeroPosition2 = false;
                
				monsterReady  = false;
				monster2Ready = false;
				monster3Ready = false;
				monster4Ready = false;
                monster5Ready = false;
                flameReady    = false;
				
				if(Math.random()*10 <5)
					pos_min = 1;
				else
					pos_min = -1;
					
					
				if(Math.random()*100 < chanceToMoveDragon)
					b5 = true;
				else
					b5 = false;
				
				// DIRECTIONS
				if (dragonReady)
				{
					if(b5)
					{
							do
						{
							pos_min = pos_min * -1;		
							dragon.x = dragon.x + (pos_min * (Math.random() * caseByMovementDragon));
						}
						while(dragon.x > canvas.width-100 || dragon.x < 100);
				
						do
						{
							pos_min = pos_min * -1;		
							dragon.y = dragon.y + (pos_min * (Math.random() * caseByMovementDragon));		
						}
						while(dragon.y > canvas.height-100 || dragon.y < 100);
					}		
					ctx.drawImage(dragonImage, dragon.x, dragon.y); // Draw the monster 4
				}
				
				if (Dragon_0_StrikeReady)
				{	
					d_0_position = d_0_position - (1 * d_0_strike.speed);
					ctx.drawImage(dragon_StrikeImage, dragon.x, dragon.y+d_0_position); // Draw the monster 2
					d_0_strike.x = dragon.x;
					d_0_strike.y = dragon.y+d_0_position;
					if(dragon.y+d_0_position < 0)
					{
						d_0_position 	= 0;
						Dragon_0_StrikeReady = false;		
					}					
						
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
					
				}
				
				if (Dragon_45_StrikeReady)
				{	
					d_45_position = d_45_position - (1 * d_45_strike.speed);
					ctx.drawImage(dragon_StrikeImage, dragon.x-d_45_position, dragon.y+d_45_position); // Draw the monster 2
					d_45_strike.x = dragon.x-d_45_position;
					d_45_strike.y = dragon.y+d_45_position;
					if(dragon.y+d_45_position < 0 && dragon.x-d_45_position > canvas.width)
					{
						d_45_position 	= 0;
						Dragon_45_StrikeReady = false;		
					}					
						
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
					
				}
				
				if (Dragon_90_StrikeReady)
				{	
					d_90_position = d_90_position + (1 * d_90_strike.speed);
					ctx.drawImage(dragon_StrikeImage, dragon.x+d_90_position, dragon.y); // Draw the monster 2
					d_90_strike.x = dragon.x+d_90_position;
					d_90_strike.y = dragon.y;
					if(dragon.x+d_90_position > canvas.width)
					{
						d_90_position 	= 0;
						Dragon_90_StrikeReady = false;		
					}					
						
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
					
				}
				
				if (Dragon_135_StrikeReady)
				{	
					d_135_position = d_135_position - (1 * d_135_strike.speed);
					ctx.drawImage(dragon_StrikeImage, dragon.x+d_135_position, dragon.y+d_135_position); // Draw the monster 2
					d_135_strike.x = dragon.x+d_135_position;
					d_135_strike.y = dragon.y+d_135_position;
					if(dragon.y+d_135_position > canvas.height && dragon.x+d_135_position > canvas.width)
					{
						d_135_position 	= 0;
						Dragon_135_StrikeReady = false;		
					}
											
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
					
				}
				
				if (Dragon_180_StrikeReady)
				{	
					d_180_position = d_180_position + (1 * d_180_strike.speed);
					ctx.drawImage(dragon_StrikeImage, dragon.x, dragon.y+d_180_position); // Draw the monster 2
					d_180_strike.x = dragon.x;
					d_180_strike.y = dragon.y+d_180_position;
					if(dragon.y+d_180_position > canvas.width)
					{
						d_180_position 	= 0;
						Dragon_180_StrikeReady = false;		
					}					
						
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
					
				}
				
				if (Dragon_225_StrikeReady)
				{	
					d_225_position = d_225_position - (1 * d_225_strike.speed);
					ctx.drawImage(dragon_StrikeImage, dragon.x+d_225_position, dragon.y-d_225_position); // Draw the monster 2
					d_225_strike.x = dragon.x-d_225_position;
					d_225_strike.y = dragon.y+d_225_position;
					if(dragon.x+d_225_position > canvas.height && dragon.y-d_225_position < 0)
					{
						d_225_position 	= 0;
						Dragon_225_StrikeReady = false;		
					}					
						
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
					
				}
				
				if (Dragon_270_StrikeReady)
				{	
					d_270_position = d_270_position - (1 * d_270_strike.speed);
					ctx.drawImage(dragon_StrikeImage, dragon.x+d_270_position, dragon.y); // Draw the monster 2
					d_270_strike.x = dragon.x+d_270_position;
					d_270_strike.y = dragon.y;
					if(dragon.x+d_270_position < 0)
					{
						d_270_position 	= 0;
						Dragon_270_StrikeReady = false;		
					}					
						
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); // Draw the monster 2
					
				}
				
				if (Dragon_315_StrikeReady)
				{	
					d_315_position = d_315_position - (1 * d_315_strike.speed);
					ctx.drawImage(dragon_StrikeImage, dragon.x-d_315_position, dragon.y-d_315_position); 
					d_315_strike.x = dragon.x-d_315_position;
					d_315_strike.y = dragon.y-d_315_position;
					if(dragon.y-d_315_position < 0 && dragon.x-d_315_position < 0)
					{
						d_315_position 	= 0;
						Dragon_315_StrikeReady = false;		
					}
											
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); 
				}
				
				if (Dragon_Barrier_StrikeReady)
				{	
					ctx.drawImage(Dragon_Barrier_StrikeImage, dragon.x-115, dragon.y-100); 
					d_barrier_strike.x = dragon.x-115;
					d_barrier_strike.y = dragon.y-100;			
					
					if(parseInt(scorePoints) % 10 == 1)
					{
						Dragon_Barrier_StrikeReady = false;
						d_barrier_strike.x = 1000;
						d_barrier_strike.y = 1000;
					}
							
					if (SlashReady)
						ctx.drawImage(SlashImage, slashX, slashY); 
					
				}
			}	
		
			// INFORMATION //
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "16px OCR A Std, monospace";
			ctx.textAlign = "left";
			ctx.textBaseline = "top";
			ctx.fillText("Sword of the Jaegers", 27, 15);
			
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "16px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "top";
			
			
			// CURRENT LIFE //
			if(hero.hp == 2)
				ctx.fillText("Life (\u2665 \u2665 \u2665)", 475, 15); // Display current lifes
			else if (hero.hp==1)
				ctx.fillText("Life (\u2665 \u2665)", 475, 15); // Display current lifes
			else
				ctx.fillText("Life (\u2665)", 475, 15); // Display current lifes
			
			
			// CURRENT SCORE //
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "16px OCR A Std, monospace";
			ctx.textAlign = "left";
			ctx.textBaseline = "bottom";
			ctx.fillText(nickname + " : " + parseInt(scorePoints), 32, 490);
			
			// CURRENT LEVEL //
			ctx.fillStyle = "rgb(250, 250, 250)";
			ctx.font = "16px OCR A Std, monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "bottom";
			ctx.fillText("Level : " + room_level, 470, 490);
			
		}
                
		// Drag and drop power
    	if(powerofgods)
        {
            ctx.drawImage(PowerOfGods, 0, 0); // Draw the power
            
			
            // Disable the image
            if(parseInt(scorePoints) % 3 == 0)
            {
                PowerOfGodsReady = false;
                powerofgods = false;
            }
        }


	}
    //---------------------------- CONTACTS WITH MONSTER ---------------------------------------//
    var GetTouchedByMonster = function (monsterName, monsterHitboxX, monsterHitboxY, heroHitboxX, heroHitboxY, callback) //callback
    {   // monster touches hero
        if (monsterName.y + monsterHitboxY >= hero.y + 5 && monsterName.y <= hero.y + heroHitboxY && monsterName.x <= hero.x + heroHitboxX && monsterName.x + monsterHitboxX >= hero.x + 5)
            callback(); 
    }
    var strikesMonster = function(monsterName, monsterHitboxX, monsterHitboxY)
    {
        if(strike.y >= monsterName.y + monsterHitboxY && st);
    }
    //------------------------MONSTERS' MOVES' ALGORITHMS----------------------------------//
     
 
     var goUp = function(monsterName, imageUp)
     {
            monsterName.y = monsterName.y - caseByMovement;
            ctx.drawImage(imageUp, monsterName.x, monsterName.y);
     }
     var goDown = function(monsterName, imageDown)
     {
            monsterName.y = monsterName.y + caseByMovement;
            ctx.drawImage(imageDown, monsterName.x, monsterName.y);
     }
     var goLeft = function(monsterName, imageLeft) 
     {
            monsterName.x = monsterName.x - caseByMovement;
            ctx.drawImage(imageLeft, monsterName.x, monsterName.y);
     }
     var goRight = function(monsterName, imageRight) 
     {
            monsterName.x = monsterName.x + caseByMovement;
            ctx.drawImage(imageRight, monsterName.x, monsterName.y);
     }
     //=================================function to give a monster the pursuit move pattern=====================//
     var pusrsuitPattern = function(monsterName, imageUp, imageDown, imageLeft, imageRight)
    {
        //Pursuit Move

        if ((monsterName.x - hero.x) < -pursuitRange  )
        {
            goRight(monsterName, imageRight, imageLeft);
        }
        else if (monsterName.y - hero.y > pursuitRange)
            {
                goUp(monsterName, imageUp, imageDown);

            }
        else if ((monsterName.y - hero.y) < -pursuitRange)
            {
                goDown(monsterName, imageDown, imageUp);
            }
        else if (monsterName.x - hero.x > pursuitRange)
            {
               goLeft(monsterName, imageLeft, imageRight);
            }

    }    
//=================================function to give a monster the random move pattern=====================//
  var randomMove = function(monsterName, imageUp, imageDown, imageLeft, imageRight, direction)
   {
        if (direction == 1) 
        {
            goUp(monsterName, imageUp, imageDown);
        }
        else if (direction == 2) 
        {
            goDown(monsterName, imageDown, imageUp);
        }
        else if (direction == 3) 
        {
            goLeft(monsterName, imageLeft, imageRight);
        }
        else if (direction == 4) 
        {
            goRight(monsterName, imageRight, imageLeft);
        }
   }
  var getRandomProbability = function()
  {
    probability = parseInt(Math.random()*100) +1;
  }
//================================ Diplay flames algortihme ==============================//
  var displayFlames = function(fire, fireImage, fireReverseImage)
{
	if(flameSprite <= 50)
        {
         ctx.drawImage(fireImage, fire.x, fire.y); // Draw the flame
         flameSprite = flameSprite+1;
        }

    else if (flameSprite > 50 && flameSprite <= 100)
    {
         ctx.drawImage(fireReverseImage, fire.x, fire.y); // Draw the flame
         flameSprite = flameSprite + 1;
    }
	else 
	{
		 ctx.drawImage(fireImage, fire.x, fire.y); // Draw the flame
		 flameSprite = 0;
	}
}
//============================ get burnt by flames =================//
  var burnt = function(fire, fireReady)
  {
       if(hero.x <= (fire.x + flameHitboxWidth) && fire.x <= (hero.x + heroHitboxWidth) && hero.y <= (fire.y + flameHitboxWidth) && fire.y <= (hero.y + heroHitboxHeight))	
        {					
            lostPoints();
            fireReady = false;
            fire.x    = 800;
        }
  }
 //=========================== lose life and points ======================//
	var lostPoints = function()
	{
        hurt.play();
		hero.hp = hero.hp - 1;
		hero.x = hero.x + 32; // save from another demage
		hero.y = hero.y + 32;
		scorePoints = scorePoints - 10000;
	}
	
	var heroStrike = function()
	{
		if(myHero == 1)
		{
			cast.play();
			
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
            epee.play(); // Sound of the sword
            
			if(strikeType == 0)
			{
				ctx.drawImage(StrikeImage, strikeX, strikeY-60); // Draw the monster
				strike.x = hero.x;
				strike.y = hero.y-60;
				scorePoints = scorePoints - 0.1;
			}
			if(strikeType == 1)
			{
				ctx.drawImage(StrikeImage, strikeX, strikeY+80); // Draw the monster
				strike.x = hero.x;
				strike.y = hero.y+80;
				scorePoints = scorePoints - 0.1;
			}
			if(strikeType == 2)
			{
				ctx.drawImage(StrikeImage, strikeX+60, strikeY); // Draw the monster
				strike.x = hero.x+60;
				strike.y = hero.y;
				scorePoints = scorePoints - 0.1;
			}
			if(strikeType == 3)
			{
				ctx.drawImage(StrikeImage, strikeX-40, strikeY); // Draw the monster
				strike.x = hero.x-40;
				strike.y = hero.y;
				scorePoints = scorePoints - 0.1;					
			}
			StrikeReady = false;
		}
	}

    // Manage all kind of sounds
	function sound(src) 
	{
	  this.sound = document.createElement("audio"); // Creation element audio
	  this.sound.src = src; 
	  this.sound.setAttribute("preload", "auto"); // attributes
	  this.sound.setAttribute("controls", "none"); // controls
	  this.sound.style.display = "none"; // no display style
	  document.body.appendChild(this.sound); 
	  this.play = function() // Play the music
	  {
		this.sound.play();
	  }
	  this.stop = function() // break the music
	  {
		this.sound.pause();
	  }
	}
    

        // Get the html element by his ID
        var dropzone = document.getElementById("dropzone");

        // We the user drop the image
        function drop(ev) 
        {

            ev.preventDefault(); // Mandatory

            if(backgroundCode == 4) // In the game
            {
                powerofgods = true; // The image is enable
                scorePoints = scorePoints - 100000; // Lose a lot of points

                // Lifes of the monsters in the levels drop the 1
                if(room_level == 1)
                {
                    monster.hp = 1;
                    monster2.hp = 1;
                    monster3.hp = 1;
                }
                else if (room_level == 2)
                {
                    monster4.hp = 1;
                    monster5.hp = 1;
                }
                else
                {
                    dragon.hp = 1;
                }
              }
              else // Desable the image
                  powerofgods = false;
        }
    
        function allowDrop(ev)
        {
          ev.preventDefault();
        }
        function drag(ev) 
        {
          ev.dataTransfer.setData("text", ev.target.id); // keep the image
        }
	

	// The main game loop
	var main = function () 
	{
		var now 	= Date.now(); // Current Date
		var delta 	= now - then; // Difference between the beginning and the end of the game

		update(delta / 10000); // Update
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