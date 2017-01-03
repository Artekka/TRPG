
/*****************************
Character Classes
*****************************/

//Base Class Stats

function baseClasses(){};
baseClasses.prototype.faction = "";
baseClasses.prototype.className = "None";
baseClasses.prototype.hitPoints = 0;
baseClasses.prototype.damage = 0;
baseClasses.prototype.armor = 0;
baseClasses.prototype.accuracy = 0;
baseClasses.prototype.critical = 0;
baseClasses.prototype.skillShot = 0;
baseClasses.prototype.canMove = false;
baseClasses.prototype.isMoving = false;
baseClasses.prototype.canAction = false;
baseClasses.prototype.actionsLeft = 0;
baseClasses.prototype.isAlive = true;
baseClasses.prototype.isFacing = 0;
baseClasses.prototype.isSide = 0;
baseClasses.prototype.isBack = 0;


baseClasses.prototype.getClassName = function() {
  return this.className;
}
baseClasses.prototype.getHitPoints = function() {
  return this.hitPoints;
}
baseClasses.prototype.getDamage = function() {
  return this.damage;
}
baseClasses.prototype.getArmor = function() {
  return this.armor;
}
baseClasses.prototype.getAccuracy = function() {
  return this.accuracy;
}
baseClasses.prototype.getCritical = function() {
  return this.critical;
}
baseClasses.prototype.getSkillShot = function() {
  return this.skillShot;
}

function playerClass() {};

playerClass.prototype = new baseClasses();

var Player = new playerClass();

function enemyClass() {};

enemyClass.prototype = new baseClasses();

var Enemy = new enemyClass();

function classSelect(value) {
  if (value === archer) {
    Player.className = "Archer";
    Player.hitPoints = 450;
    Player.damage = 100;
    Player.armor = 20;
    Player.accuracy = 75;
    Player.critical = 20;
    Player.skillShot = 20;
    PlayerStatsRefresh();
    PlayerStatsRefreshUI();
    console.log("Class selected: " + Player.className)
    return;
  }
  if (value === sword) {
    Player.className = "Sword";
    Player.hitPoints = 600;
    Player.damage = 90;
    Player.armor = 70;
    Player.accuracy = 85;
    Player.critical = 10;
    Player.skillShot = 20;
    PlayerStatsRefresh();
    PlayerStatsRefreshUI();
    console.log("Class selected: " + Player.className)
    return;
  }
  if (value === axe) {
    Player.className = "Axe";
    Player.hitPoints = 500;
    Player.damage = 170;
    Player.armor = 60;
    Player.accuracy = 75;
    Player.critical = 30;
    Player.skillShot = 15;
    PlayerStatsRefresh();
    PlayerStatsRefreshUI();
    console.log("Class selected: " + Player.className)
    return;
  }
  if (value === caster) {
    Player.className = "Caster";
    Player.hitPoints = 300;
    Player.damage = 200;
    Player.armor = 10;
    Player.accuracy = 85;
    Player.critical = 20;
    Player.skillShot = 15;
    PlayerStatsRefresh();
    PlayerStatsRefreshUI();
    console.log("Class selected: " + Player.className)
    return;
  }
  if (value === spear) {
    Player.className = "Spear";
    Player.hitPoints = 550;
    Player.damage = 100;
    Player.armor = 60;
    Player.accuracy = 80;
    Player.critical = 15;
    Player.skillShot = 25;
    PlayerStatsRefresh();
    PlayerStatsRefreshUI();
    console.log("Class selected: " + Player.className)
    return;
  }
  else {
    Player.className = "None";
    Player.hitPoints = 0;
    Player.damage = 0;
    Player.armor = 0;
    Player.accuracy = 0;
    Player.critical = 0;
    Player.skillShot = 0;
    PlayerStatsRefresh();
    PlayerStatsRefreshUI();
    console.log("Class selected: " + Player.className)
    return;
  }


  console.log(Player);
}

function classSelect_Enemy(value) {
  if (value === archer) {
    Enemy.className = "Archer";
    Enemy.hitPoints = 450;
    Enemy.damage = 100;
    Enemy.armor = 20;
    Enemy.accuracy = 75;
    Enemy.critical = 20;
    Enemy.skillShot = 20;
    EnemyStatsRefresh();
    EnemyStatsRefreshUI();
    console.log("Enemy Class selected: " + Enemy.className)
    return;
  }
  if (value === sword) {
    Enemy.className = "Sword";
    Enemy.hitPoints = 600;
    Enemy.damage = 90;
    Enemy.armor = 70;
    Enemy.accuracy = 85;
    Enemy.critical = 10;
    Enemy.skillShot = 20;
    EnemyStatsRefresh();
    EnemyStatsRefreshUI();
    console.log("Enemy Class selected: " + Enemy.className)
    return;
  }
  if (value === axe) {
    Enemy.className = "Axe";
    Enemy.hitPoints = 500;
    Enemy.damage = 170;
    Enemy.armor = 60;
    Enemy.accuracy = 75;
    Enemy.critical = 30;
    Enemy.skillShot = 15;
    EnemyStatsRefresh();
    EnemyStatsRefreshUI();
    console.log("Enemy Class selected: " + Enemy.className)
    return;
  }
  if (value === caster) {
    Enemy.className = "Caster";
    Enemy.hitPoints = 300;
    Enemy.damage = 200;
    Enemy.armor = 10;
    Enemy.accuracy = 85;
    Enemy.critical = 20;
    Enemy.skillShot = 15;
    EnemyStatsRefresh();
    EnemyStatsRefreshUI();
    console.log("Enemy Class selected: " + Enemy.className)
    return;
  }
  if (value === spear) {
    Enemy.className = "Spear";
    Enemy.hitPoints = 550;
    Enemy.damage = 100;
    Enemy.armor = 60;
    Enemy.accuracy = 80;
    Enemy.critical = 15;
    Enemy.skillShot = 25;
    EnemyStatsRefresh();
    EnemyStatsRefreshUI();
    console.log("Enemy Class selected: " + Enemy.className)
    return;
  }
  else {
    Enemy.className = "None";
    Enemy.hitPoints = 0;
    Enemy.damage = 0;
    Enemy.armor = 0;
    Enemy.accuracy = 0;
    Enemy.critical = 0;
    Enemy.skillShot = 0;
    EnemyStatsRefresh();
    EnemyStatsRefreshUI();
    console.log("Enemy Class selected: " + Enemy.className)
    return;
  }
  
}

/*****************************
User Class
*****************************/
/*
Class Selection
*/



/*****************************
Enemy Class Selection
*****************************/
/*
var opponentSelection = Math.random();
var enemyClass1 = Math.random();

if (opponentSelection <= 0.20) {
  opponentSelection = archer;
  classSelect_Enemy(opponentSelection);
}
if (opponentSelection <= 0.40) {
  classSelect_Enemy = axe;
  classSelect_Enemy(opponentSelection);
}

if (opponentSelection <= 0.60) {
  classSelect_Enemy = caster;
  classSelect_Enemy(opponentSelection);
}
if (opponentSelection <= 0.80) {
  classSelect_Enemy = sword;
  classSelect_Enemy(opponentSelection);
}
if (opponentSelection >= 0.80) {
  classSelect_Enemy = spear;
  classSelect_Enemy(opponentSelection);
}
*/

/*****************************	
Class Matchups
*****************************/
var matchup = "User Class:" + " " + Player.className;
    matchup += " " + "vs";
    matchup += " " + "Enemy Class:" + " " + Enemy.className;

var advantage;
// same vs same
if (Player.className === Enemy.className) {
	advantage = "No advantage!";
}

// sword vs
if (Player.className === "Sword") {
	if (Enemy.className === "Axe") {
		Player.accuracy *= 1.1;
		Player.damage *= 1; 
		advantage = "Increased Accuracy!";
		Enemy.accuracy *= 0.9;
		Enemy.damage *= 1.1;
	}
	if (Enemy.className === "Spear") {
		Player.accuracy *= 0.9;
		Player.damage *= 1;
		advantage = "Decreased Accuracy!";
	}
	if (Enemy.className === "Caster") {
		Player.accuracy *= 1.1;
		Player.damage *= 1.1;
		advantage = "Increased Accuracy and Damage!";
		Enemy.accuracy *= 1.2;
		Enemy.damage *= 1;
	}
	if (Enemy.className === "Archer") {
		Player.accuracy *= 1.1;
		Player.damage *= 1;
		advantage = "Increased Accuracy!";
		Enemy.accuracy *= 0.9;
		Enemy.damage *= 1;
	}
}

// axe vs
if (Player.className === "Axe") {
	if (Enemy.className === "Sword") {
		Player.accuracy *= 0.9;
		Player.damage *= 1.1;
		advantage = "Decreased Accuracy and Increased Damage!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1; 
	}
	
	if (Enemy.className === "Spear") {
		Player.accuracy *= 0.8;
		Player.damage *= 1;
		advantage = "Decreased Accuracy!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1.1;
	}
	
	if (Enemy.className === "Caster") {
		Player.accuracy *= 1.1;
		Player.damage *= 1.2;
		advantage = "Increased Accuracy and Damage!";
		Enemy.accuracy *= 1.2;
		Enemy.damage *= 1;
	}
	
	if (Enemy.className === "Archer") {
		Player.accuracy *= 1.1;
		Player.damage *= 1.2;
		advantage = "Increased Accuracy and Damage!";
		Enemy.accuracy *= 1;
		Enemy.damage *= 1;
	}
}

// spear vs
if (Player.className === "Spear") {
	if (Enemy.className === "Sword") {
		Player.accuracy *= 1;
		Player.damage *= 1;
		advantage = "No Advantages!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1; 
	}
	
	if (Enemy.className === "Axe") {
		Player.accuracy *= 1.1;
		Player.damage *= 1.1;
		advantage = "Increased Accuracy and Damage!";
		Enemy.accuracy *= 0.8;
		Enemy.damage *= 1;
	}
	
	if (Enemy.className === "Caster") {
		Player.accuracy *= 1.1;
		Player.damage *= 1;
		advantage = "Increased Accuracy!";
		Enemy.accuracy *= 1.2;
		Enemy.damage *= 1;
	}
	
	if (Enemy.className === "Archer") {
		Player.accuracy *= 1.1;
		Player.damage *= 1;
		advantage = "Increased Accuracy!";
		Enemy.accuracy *= 0.9;
		Enemy.damage *= 1;
	}
}

// caster vs
if (Player.className === "Caster") {
	if (Enemy.className === "Sword") {
		Player.accuracy *= 1.2;
		Player.damage *= 1;
		advantage = "Increased Accuracy!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1.1;
	}
	
	if (Enemy.className === "Axe") {
		Player.accuracy *= 1.2;
		Player.damage *= 1;
		advantage = "Increased Accuracy!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1.2;
	}
	
	if (Enemy.className === "Spear") {
		Player.accuracy *= 1.2;
		Player.damage *= 1;
		advantage = "Increased Accuracy!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1;
	}
	
	if (Enemy.className === "Archer") {
		Player.accuracy *= 1.2;
		Player.damage *= 1;
		advantage = "Increased Accuracy!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1.2;
	}
}

// archer vs
if (Player.className === "Archer") {
	if (Enemy.className === "Sword") {
		Player.accuracy *= 0.9;
		Player.damage *= 1;
		advantage = "Decreased Accuracy!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1;
	}
	
	if (Enemy.className === "Axe") {
		Player.accuracy *= 1;
		Player.damage *= 1;
		advantage = "No Advantages!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1.2;
	}
	
	if (Enemy.className === "Spear") {
		Player.accuracy *= 0.9;
		Player.damage *= 1;
		advantage = "Decreased Accuracy!";
		Enemy.accuracy *= 1.1;
		Enemy.damage *= 1;
	}
	
	if (Enemy.className === "Caster") {
		Player.accuracy *= 1.1;
		Player.damage *= 1.2;
		advantage = "Increased Accuracy and Damage!";
		Enemy.accuracy *= 1.2;
		Enemy.damage *= 1;
	}
}

console.log(matchup);
console.log(advantage);

/*****************************	
Combat
*****************************/

/*****************************	
UI
*****************************/

//add button functionality
// Player
document.getElementById("archer").addEventListener("click", function(){
    classSelect(archer);
});
document.getElementById("sword").addEventListener("click", function(){
    classSelect(sword);
});
document.getElementById("axe").addEventListener("click", function(){
    classSelect(axe);
});
document.getElementById("spear").addEventListener("click", function(){
    classSelect(spear);
});
document.getElementById("caster").addEventListener("click", function(){
    classSelect(caster);
});

// Enemy
document.getElementById("archer_enemy").addEventListener("click", function(){
    classSelect_Enemy(archer);
});
document.getElementById("sword_enemy").addEventListener("click", function(){
    classSelect_Enemy(sword);
});
document.getElementById("axe_enemy").addEventListener("click", function(){
    classSelect_Enemy(axe);
});
document.getElementById("spear_enemy").addEventListener("click", function(){
    classSelect_Enemy(spear);
});
document.getElementById("caster_enemy").addEventListener("click", function(){
    classSelect_Enemy(caster);
});

// Fight and Reset
document.getElementById("fight").addEventListener("click", function(){
    combatRound();
});
document.getElementById("reset").addEventListener("click", function(){
    combatReset();
    battleDIV.innerHTML = ("<p>" + " " + "</p>");
});

//set UI element values
var advantageDIV = document.getElementById("advantage");
    advantageDIV.innerHTML = ("<p>" + advantage + "</p>");

var battleDIV = document.getElementById("battle");
    battleDIV.innerHTML = ("<p>" + " " + "</p>");
var matchupDIV = document.getElementById("matchup");
	matchupDIV.innerHTML = ("<p>" + matchup + "</p>");

function PlayerStatsRefreshUI() {
    PlayerDIV.innerHTML = ("Class: " + "<span class='stats'>" + Player.className + "</p>");
    userHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + Player.hitPoints + "</p>");
    userArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + Player.armor + "</p>");
    userDamageDIV.innerHTML = ("Damage" + "<span class='stats'>" + Math.round(Player.damage, 0) + "</p>");
    userAccuracyDIV.innerHTML = ("Accuracy: " + "<span class='stats'>" + Math.round(Player.accuracy, 0) + "</p>");
    userCriticalDIV.innerHTML = ("Critical: " + "<span class='stats'>" + Player.critical + "</p>");
}

function EnemyStatsRefreshUI() {
    enemyClassDIV.innerHTML = ("Class: " + "<span class='stats'>" + Enemy.className + "</p>");
    enemyHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + Enemy.hitPoints + "</p>");
    enemyArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + Enemy.armor + "</p>");
    enemyDamageDIV.innerHTML = ("Damage" + "<span class='stats'>" + Math.round(Enemy.damage, 0) + "</p>");
    enemyAccuracyDIV.innerHTML = ("Accuracy: " + "<span class='stats'>" + Math.round(Enemy.accuracy, 0) + "</p>");
    enemyCriticalDIV.innerHTML = ("Critical: " + "<span class='stats'>" + Enemy.critical + "</p>");
}

var PlayerDIV = document.getElementById("className");
    PlayerDIV.innerHTML = ("Class: " + "<span class='stats'>" + Player.class + "</p>");
var userHPDIV = document.getElementById("classHP");
    userHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + Player.hitPoints + "</p>");
var userArmorDIV = document.getElementById("classArmor");
    userArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + Player.armor + "</p>");
var userDamageDIV = document.getElementById("classDamage");
    userDamageDIV.innerHTML = ("Damage" + "<span class='stats'>" + Math.round(Player.damage, 0) + "</p>");
var userAccuracyDIV = document.getElementById("classAccuracy");
    userAccuracyDIV.innerHTML = ("Accuracy: " + "<span class='stats'>" + Math.round(Player.accuracy, 0) + "</p>");
var userCriticalDIV = document.getElementById("classCritical");
    userCriticalDIV.innerHTML = ("Critical: " + "<span class='stats'>" + Player.critical + "</p>");

var enemyClassDIV = document.getElementById("enemyName");
    enemyClassDIV.innerHTML = ("Class: " + "<span class='stats'>" + Enemy.class + "</p>");
var enemyHPDIV = document.getElementById("enemyHP");
    enemyHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + Enemy.hitPoints + "</p>");
var enemyArmorDIV = document.getElementById("enemyArmor");
    enemyArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + Enemy.armor + "</p>");
var enemyDamageDIV = document.getElementById("enemyDamage");
    enemyDamageDIV.innerHTML = ("Damage" + "<span class='stats'>" + Math.round(Enemy.damage, 0) + "</p>");
var enemyAccuracyDIV = document.getElementById("enemyAccuracy");
    enemyAccuracyDIV.innerHTML = ("Accuracy: " + "<span class='stats'>" + Math.round(Enemy.accuracy, 0) + "</p>");
var enemyCriticalDIV = document.getElementById("enemyCritical");
    enemyCriticalDIV.innerHTML = ("Critical: " + "<span class='stats'>" + Enemy.critical + "</p>");

// combat log scroll to bottom
function combatScrollDown(){
var combatScrollBottom = document.getElementById("battle");
    combatScrollBottom.scrollTop = combatScrollBottom.scrollHeight;
};

/*****************************	
Combat Mechanics
*****************************/
function dmgRng(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return ((Math.random() * (max - min) + min) * 0.1).toFixed(2);
}

function dmgRng_enemy(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return ((Math.random() * (max - min) + min) * 0.1).toFixed(2);
}

function PlayerStatsRefresh() {
  damageThisRound = Math.round(Player.damage * (1-(0+(Enemy.armor *0.01))), 0);
  damageReset = damageThisRound;
}

function EnemyStatsRefresh() {
  damageThisRound_enemy = Math.round(Enemy.damage * (1-(0+(Player.armor * 0.01))), 0);
  damageReset_enemy = damageThisRound_enemy;
}

var i = 1;

var damageThisRound = Math.round(Player.damage * (1-(0+(Enemy.armor *0.01))), 0);

var damageReset = damageThisRound;
// var totalDamage = 0;

var damageThisRound_enemy = Math.round(Enemy.damage * (1-(0+(Player.armor * 0.01))), 0);
var damageReset_enemy = damageThisRound_enemy;
// var totalDamage_enemy = 0;

function combat() {
  // PlayerStatsRefresh();
  // EnemyStatsRefresh();
	
    if(Enemy.hitPoints >= 0 || Player.hitPoints >= 0) {
		var randomRoll_1 = Math.round(Math.random() * 100);
		var randomRoll_2 = Math.round(Math.random() * 100);
		var randomRoll_3 = Math.round(Math.random() * 100);
    var randomRoll_4 = Math.round(Math.random() * 100);
		var hitCheck = randomRoll_1 <= Player.accuracy;
		var skillShot = randomRoll_2 <= Player.skillShot;
		var critHit = randomRoll_3 <= Player.critical;
      
    var randomRoll_1_enemy = Math.round(Math.random() * 100);
		var randomRoll_2_enemy = Math.round(Math.random() * 100);
		var randomRoll_3_enemy = Math.round(Math.random() * 100);
    var randomRoll_4_enemy = Math.round(Math.random() * 100);
		var hitCheck_enemy = randomRoll_1_enemy <= Enemy.accuracy;
		var skillShot_enemy = randomRoll_2_enemy <= Enemy.skillShot;
		var critHit_enemy = randomRoll_3_enemy <= Enemy.critical;
   
	
	if (hitCheck) {
        damageThisRound = Math.round(Player.damage * (1-(0+(Enemy.armor *0.01))), 0);
        damageThisRound *= dmgRng(8,10);
        damageThisRound = Math.round(damageThisRound, 0);
		console.log("Round " + i);
		battleDIV.insertAdjacentHTML("beforeend","<p class='roundCounter'>" + "Round " + i + "</p>");
        if (skillShot) {
          if (Player.className === "Sword") {
			damageThisRound *= 2.1 * dmgRng(8,10);
            damageThisRound = Math.round(damageThisRound, 0);
			console.log("You used your special skill! Double Strike!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Double Strike!" + "</p>");
          }
          if (Player.className === "Axe") {
			damageThisRound = (Player.damage - (Enemy.armor * 0.7)) * 2 * dmgRng(8,10);
            damageThisRound = Math.round(damageThisRound, 0);
			console.log("You used your special skill! Skull Splitter!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Skull Splitter!" + "</p>");
          }
          if (Player.className === "Spear") {
			Player.armor = Player.armor * 2;
			console.log("You used your special skill! Bolster!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Bolster!" + "</p>");
            userArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + Player.armor + "</p>");
          }
          if (Player.className === "Caster") {
			damageThisRound *= 3 * dmgRng(7,10);
            damageThisRound = Math.round(damageThisRound, 0);
			console.log("You used your special skill! Elemental Destruction!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Elemental Destruction!" + "</p>");
          }
          if (Player.className === "Archer") {
			damageThisRound = Player.damage;
			console.log("You used your special skill! Armor Pierce!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Armor Pierce!" + "</p>");
          }
		}
		if (critHit) {
			damageThisRound *= 1.5 * dmgRng(8,10);
            damageThisRound = Math.round(damageThisRound, 0);
			console.log("Critical Hit!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Critical Hit!" + "</p>");
		}
		console.log("You hit for " + damageThisRound + " damage!");
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "You hit for " + damageThisRound + " damage!" + "</p>");
		Enemy.hitPoints -= Math.round(damageThisRound, 0);
		console.log(randomRoll_1 + " vs " + Math.round(Player.accuracy) + " accuracy.");
 
		if (Enemy.hitPoints <= 0) {
                Enemy.hitPoints = 0;
                Enemy.isAlive = false;
                enemyHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + Enemy.hitPoints + "</p>");
				console.log("You killed the enemy!");
				battleDIV.insertAdjacentHTML("beforeend","<p>" + "You killed the enemy!" + "</p>");
          combatScrollDown()
          return true;
			}
      
		damageThisRound = damageReset;
		}
        
        if (randomRoll_1 > Player.accuracy) {
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Round " + i + "</p>");
            console.log("You miss!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You miss!" + "</p>");
			console.log(randomRoll_1 + " vs " + Math.round(Player.accuracy) + " accuracy.");
			damageThisRound = damageReset;
        }
      
      
      if (hitCheck_enemy) {
        damageThisRound_enemy = Math.round(Enemy.damage * (1-(0+(Player.armor * 0.01))), 0);
        damageThisRound_enemy *= dmgRng(8,10);
        damageThisRound_enemy = Math.round(damageThisRound_enemy, 0);
        if (skillShot_enemy) {
          if (Enemy.className === "Sword") {
			damageThisRound_enemy *= 2.1 * dmgRng(8,10);
            damageThisRound_enemy = Math.round(damageThisRound_enemy, 0);
			console.log("The enemy used their skill! Double Strike!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Double Strike!" + "</p>");
          }
          if (Enemy.className === "Axe") {
			damageThisRound_enemy = (Enemy.damage - (Player.armor * 0.7)) * 2 * dmgRng(8,10);
            damageThisRound_enemy = Math.round(damageThisRound_enemy, 0);
			console.log("The enemy used their special skill! Skull Splitter!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Skull Splitter!" + "</p>");
          }
          if (Enemy.className === "Spear") {
			enemyClass.armor = Enemy.armor * 2;
			console.log("The enemy used their special skill! Bolster!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Bolster!" + "</p>");
            userArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + Enemy.armor + "</p>");
            
          }
          if (Enemy.className === "Caster") {
			damageThisRound_enemy *= 3 * dmgRng(8,10);
			console.log("You used your special skill! Elemental Destruction!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Elemental Destruction!" + "</p>");
          }
          if (Enemy.className === "Archer") {
			damageThisRound_enemy = Enemy.damage;
			console.log("The enemy used their special skill! Armor Pierce!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Armor Pierce!" + "</p>");
          }
		}
		if (critHit_enemy) {
			damageThisRound_enemy *= 1.5 * dmgRng(8,10);
            damageThisRound_enemy = Math.round(damageThisRound_enemy, 0);
			console.log("Critical Hit!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Critical Hit!" + "</p>");
		}
		console.log("Enemy hit you for " + damageThisRound_enemy + " damage!");
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy hit you for " + damageThisRound_enemy + " damage!" + "</p>");
		Player.hitPoints -= Math.round(damageThisRound_enemy, 0);
		console.log(randomRoll_1_enemy + " vs " + Math.round(Enemy.accuracy) + " accuracy.");
		i++;
		if (Player.hitPoints <= 0) {
                Player.hitPoints = 0;
                Player.isAlive = false;
                userHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + Player.hitPoints + "</p>");
				console.log("The enemy killed you!");
				battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy killed you!" + "</p>");
          combatScrollDown()
          return true;
			}
		damageThisRound_enemy = damageReset_enemy;
		}
        
        if (randomRoll_1_enemy > Enemy.accuracy) {
            console.log("The enemy missed!!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy missed!" + "</p>");
			console.log(randomRoll_1_enemy + " vs " + Math.round(Player.accuracy) + " accuracy.");
            
			damageThisRound_enemy = damageReset;
			i++;
          }
        }
  
  userHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + Player.hitPoints + "</p>");
  enemyHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + Enemy.hitPoints + "</p>");
  
  combatScrollDown()
  return false;
}

function combatRound(){
    var play = combat();       // Fight and check if anybody is dead
    if(play === false){       // If nobody is dead then do another round
        setTimeout(combatRound, 1000);
    }
}

function combatReset() {
  PlayerStatsRefresh();
  EnemyStatsRefresh();
  i = 1;
}

//combatRound();

/* 

Note about facing, back, and side for advantage

After unit moves, set (Player) sideDirection(x,y) and set backDirection(x)
When enemy attacks, if attacker.faceDirection === (Player) sideDirection
  get bonus ie 15% accuracy and damage
When enemy attacks, if attacker.faceDirection === (Player) backDirection
  get bonus ie 25% accuracy and damage
.faceDirection === .backDirection && can actually attack target
then add in damage bonus - THOUGHTS
*/