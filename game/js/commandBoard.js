// =============================================================================== //
// COMMAND BOARD
// =============================================================================== //
// Hitboxes
var heroHitboxWidth         = 45;		// Hitbox of the hero -
var heroHitboxHeight        = 65;		// Hitbox of the hero |

var packyHitbox             = 68;		// Hitbox Monster 4 and 5

var batHitboxWidth          = 90;		// Hitbox Monster 3 - 
var batHitboxHeight         = 46;		// Hitbox Monster 3 |

var slimeHitboxWidth        = 41;		// Hitbox Monster 1 and 2 - 
var slimeHitboxHeight       = 35;		// Hitbox Monster 1 and 2 |

var flameHitboxWidth        = 25;		// Hitbox Flame - 
var flameHitboxHeight       = 27;		// Hitbox Flame |

var swordHitboxWidth        = 27;		// Hitbox Sword -
var swordHitboxHeight       = 58;		// Hitbox Sword |



var chanceToStrikeMonster3 	= 5;  		// chance to strike by 1 to 10

var caseByMovement     	 	= 2; 		// Movement by 1 to 100
var selectDirection         = 0;        //number choosen with Math.random() to have the number which will be used to choose the direction


var direction2              = 1;		// Variable of the direction of monster 2
var direction3              = 1;		// Variable of the direction of monster 3
var direction5              = 1;		// Variable of the direction of monster 5

var probability             = 0;
var goSameWay               = 98;       // probability of going the same way

var pursuitRange            = 20;       // the range of proximity with the hero between which the monster will change trajectory

var monsterStrikeSpeed		= 10;		// Speed of the strike by 1 to 100

var myHero					= 1;		// Choose your hero
var scorePoints				= 1000000;	// Beginning Points
var resetHeroPosition       = true;     // Do you have to reset hero position?
var resetHeroPosition2      = true;     // Do you have to reset hero position?
	
var backgroundCode 			= 0;		// Where to start

var flameSprite              = 1;       // If 1 draw flame if 2 draw flameReverse

var chanceToMoveDragon 		= 1;		// Chance to move by 1 to 10
var caseByMovementDragon	= 72; 		// Movement by 1 to 100
var dragonStrikeSpeed		= 10;		// Strike Speed by 1 to 100
var chanceToStrikeDragon	= 10;  		// chance to strike by 1 to 10
var chanceToDefenseDragon	= 2;  		// chance to summon the barrier by 1 to 10

var	room_level				= 1;		// Actuel level (Room 1, 2 or 3)
	
var life_slim				= 0;		// Life of monster (0)
var life_bat				= 0;		// Life of monster (0)
var life_packy				= 0;		// Life of monster (0)
var life_dragon				= 0;		// Life of monster (0)
var life_hero				= 0;		// Life of monster (0)
var life_flame              = 0;		// Life of monster (0)


if(localStorage.getItem("all_might_storage") === null) // Check if the localStorage is initialized on the user's browser
{
	var all_might_storage       = [];	// Creation of an array

	// Adding some scores for the user's goal
	all_might_storage = [
		{score:1000000, name:"Levi", land:"JAP" },
		{score:999000, name:"Mikza", land:"JAP"},
		{score:980000, name:"Crista", land:"USA"},
		{score:970000, name:"Sasha", land:"JAP"},
		{score:960000, name:"Kirito", land:"JAP"},
		{score:940000, name:"Ichigo", land:"JAP"},
		{score:940000, name:"Sasuke", land:"RUS"},
		{score:100, name:"Jean", land:"JAP"}
	];
}
else // If the array already exists
{
   all_might_storage = JSON.parse(localStorage.getItem("all_might_storage")); // Get the array from the local storage
}

var country = "SUI";		// Variable on the country

var previousScore;			// Stores temporarily the previous score to put it down in the classement
var previousNickname;		// Stores temporarily the previous score to put it down in the classement	
var previousCountry;		// Stores temporarily the previous score to put it down in the classement

var invicible               = false; 	// Invicible (test)
var invicibilityFrame       = 0;	

// =============================================================================== //