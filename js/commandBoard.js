// =============================================================================== //
// COMMAND BOARD
// =============================================================================== //
// Hitboxes
    var heroHitboxWidth         = 45;
    var heroHitboxHeight        = 65;

    var packyHitbox             = 68;

    var batHitboxWidth          = 90;
    var batHitboxHeight         = 46;

    var slimeHitboxWidth        = 41;
    var slimeHitboxHeight       = 35;

    var flameHitboxWidth        = 25;
    var flameHitboxHeight       = 27;

    var swordHitboxWidth        = 27;
    var swordHitboxHeight       = 58;

    
	var chanceToStrikeMonster3 	= 5;  		// chance to strike by 1 to 10

	var caseByMovement     	 	= 2; 		// Movement by 1 to 100
    var selectDirection         = 0;        //number choosen with Math.random() to have the number which will be used to choose the direction
    
   
    var direction2              = 1;
    var direction3              = 1;
    var direction5              = 1;

    var probability             = 0;
    var goSameWay               = 98;       // probability of going the same way

    var pursuitRange            = 20;       // the range of proximity with the hero between which the monster will change trajectory

	var monsterStrikeSpeed		= 10;		// Speed of the strike by 1 to 100

	var myHero					= 1;		// Choose your hero
	var scorePoints				= 1000000;	// Beginning Points
	var resetHeroPosition       = true;     //do xou have to reset hero position?
    var resetHeroPosition2      = true;     //do xou have to reset hero position?
		
	var backgroundCode 			= 0;		// Where to start

    var flameSprite              = 1;     //if 1 draw flame if 2 draw flameReverse
	
	var chanceToMoveDragon 		= 1;
	var caseByMovementDragon	= 72; 		// Movement by 1 to 100
	var dragonStrikeSpeed		= 10;
	var chanceToStrikeDragon	= 10;  		// chance to strike by 1 to 10
	var chanceToDefenseDragon	= 2;  		// chance to strike by 2 to 10
	
	var	room_level				= 1;
	
	var life_slim				= 0;
	var life_bat				= 0;
	var life_packy				= 0;
	var life_dragon				= 0;
	var life_hero				= 0;
    var life_flame              = 0;

    
    var highScores              = [];      //array of HighScores to display at the end of the game
    var nicknames               = [];      //nickNames of highscorers
    var countries               = [];

    if(highScores.length < 1)
    {
        highScores = [1000000, 990000, 980000, 970000, 960000, 950000, 940000, 900000, 500000, 100];
        nicknames = ["Levi", "Mikza", "Crista", "Mike", "Sasha", "Hanji", "Armin", "Pixis", "Ervin", "Jean"];
        countries = ["JAP", "JAP", "USA", "JAP", "JAP", "JAP", "USA", "JAP", "SUI", "SUI"];
    }
    else
    {
        highScores = JSON.parse(localStorage.getItem("highScores")); // Get the array from the local storage
        nicknames = JSON.parse(localStorage.getItem("nicknames")); // Get the array from the local storage
        countries = JSON.parse(localStorage.getItem("countries")); // Get the array from the local storage
    }

    var country = "SUI";
   
    var previousScore;                      //stores temporarily the previous score to put it down in the classement
    var previousNickname;
    var previousCountry;
    
    var invicible               = false;
    var invicibilityFrame       = 0;
	
// =============================================================================== //