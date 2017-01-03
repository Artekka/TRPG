
/*****************************
Character Classes
*****************************/

function characterClass() {};

characterClass.prototype.class = "";
characterClass.prototype.hitPoints = 0;
characterClass.prototype.damage = 0;
characterClass.prototype.armor = 0;
characterClass.prototype.accuracy = 0;
characterClass.prototype.critical = 0;
characterClass.prototype.skillShot = 0;

characterClass.prototype.getClass = function() {
  return this.class;
}

characterClass.prototype.getHealth = function() {
  return this.hitPoints;
}

characterClass.prototype.getDamage = function() {
  return this.damage;
}

characterClass.prototype.getArmor = function() {
  return this.armor;
}

characterClass.prototype.getAccuracy = function() {
  return this.accuracy;
}

characterClass.prototype.getCritical = function() {
  return this.critical;
}

characterClass.prototype.getSkillShot = function() {
  return this.skillShot;
}

function classSelect(x) {
  if (x === "archer") {
    this.class = "archer";
    this.hitPoints = 350;
    this.damage = 100;
    this.armor = 20;
    this.accuracy = 75;
    this.critical = 20;
    this.skillShot = 20;
    return charClasses.archer;
  }
  if (x === "sword") {
    this.class = "sword";
    this.hitPoints = 600;
    this.damage = 90;
    this.armor = 70;
    this.accuracy = 85;
    this.critical = 10;
    this.skillShot = 20;
    return charClasses.sword;
  }
  if (x === "axe") {
    this.class = "axe";
    this.hitPoints = 500;
    this.damage = 170;
    this.armor = 40;
    this.accuracy = 70;
    this.critical = 15;
    this.skillShot = 15;
    return charClasses.axe;
  }
  if (x === "caster") {
    this.class = "caster";
    this.hitPoints = 200;
    this.damage = 200;
    this.armor = 10;
    this.accuracy = 85;
    this.critical = 10;
    this.skillShot = 10;
    return charClasses.caster;
  }
  if (x === "spear") {
    this.class = "spear";
    this.hitPoints = 550;
    this.damage = 100;
    this.armor = 60;
    this.accuracy = 80;
    this.critical = 15;
    this.skillShot = 25;
    return charClasses.spear;
  }
}

classSelect.prototype = new characterClass;

function Enemy() {}

Enemy.prototype = new characterClass;

var player1 = new characterClass();

var enemy1 = new Enemy();


var charClasses = {};

charClasses.archer = {
    class: "archer",
    hitPoints: 350,
    damage: 100,
	armor: 20,
    accuracy: 75,
    critical: 20,
    skillShot: 20
};

charClasses.axe = {
    class: "axe",
    hitPoints: 500,
    damage: 170,
	armor: 40,
    accuracy: 70,
    critical: 15,
    skillShot: 15
};

charClasses.caster = {
    class: "caster",
    hitPoints: 200,
    damage: 200,
	armor: 10,
    accuracy: 85,
    critical: 10,
    skillShot: 10
};

charClasses.spear = {
    class: "spear",
    hitPoints: 550,
    damage: 100,
	armor: 60,
    accuracy: 80,
    critical: 15,
    skillShot: 25
};

charClasses.sword = {
    class: "sword",
    hitPoints: 600,
    damage: 90,
	armor: 70,
    accuracy: 85,
    critical: 10,
    skillShot: 20
};



/*****************************
User Class
*****************************/
/*
Class Selection
*/

var userClass = prompt("Choose your class: sword | axe | spear | caster | archer").toLowerCase();

// Later - If other class is chosen, give error

	userClass = charClasses[userClass];

function chooseClass(id) {
  return id;
}


console.log(userClass);

/*****************************
Enemy Class Selection
*****************************/
var enemyClass = Math.random();

if (enemyClass <= 0.20) {
	enemyClass = "sword";
	enemyClass = charClasses[enemyClass];
}

if (enemyClass <= 0.40) {
	enemyClass = "axe";
	enemyClass = charClasses[enemyClass];
}

if (enemyClass <= 0.60) {
	enemyClass = "spear";
	enemyClass = charClasses[enemyClass];
}

if (enemyClass <= 0.80) {
	enemyClass = "caster";
	enemyClass = charClasses[enemyClass];
}

if (enemyClass >= 0.80) {
	enemyClass = "archer";
	enemyClass = charClasses[enemyClass];
}

console.log(enemyClass);

/*****************************	
Class Matchups
*****************************/
var matchup = "User Class:" + " " + userClass.class;
    matchup += " " + "vs";
    matchup += " " + "Enemy Class:" + " " + enemyClass.class;

var advantage;

// same vs same
if (userClass.class === enemyClass.class) {
	advantage = "No advantage!";
}

// sword vs
if (userClass.class === "sword") {
	if (enemyClass.class === "axe") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1; 
		advantage = "Increased Accuracy!";
		enemyClass.accuracy *= 0.9;
		enemyClass.damage *= 1.1;
	}
	if (enemyClass.class === "spear") {
		userClass.accuracy *= 0.9;
		userClass.damage *= 1;
		advantage = "Decreased Accuracy!";
	}
	if (enemyClass.class === "caster") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1.1;
		advantage = "Increased Accuracy and Damage!";
		enemyClass.accuracy *= 1.2;
		enemyClass.damage *= 1;
	}
	if (enemyClass.class === "archer") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1;
		advantage = "Increased Accuracy!";
		enemyClass.accuracy *= 0.9;
		enemyClass.damage *= 1;
	}
}

// axe vs
if (userClass.class === "axe") {
	if (enemyClass.class === "sword") {
		userClass.accuracy *= 0.9;
		userClass.damage *= 1.1;
		advantage = "Decreased Accuracy and Increased Damage!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1; 
	}
	
	if (enemyClass.class === "spear") {
		userClass.accuracy *= 0.8;
		userClass.damage *= 1;
		advantage = "Decreased Accuracy!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1.1;
	}
	
	if (enemyClass.class === "caster") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1.2;
		advantage = "Increased Accuracy and Damage!";
		enemyClass.accuracy *= 1.2;
		enemyClass.damage *= 1;
	}
	
	if (enemyClass.class === "archer") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1.2;
		advantage = "Increased Accuracy and Damage!";
		enemyClass.accuracy *= 1;
		enemyClass.damage *= 1;
	}
}

// spear vs
if (userClass.class === "spear") {
	if (enemyClass.class === "sword") {
		userClass.accuracy *= 1;
		userClass.damage *= 1;
		advantage = "No Advantages!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1; 
	}
	
	if (enemyClass.class === "axe") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1.1;
		advantage = "Increased Accuracy and Damage!";
		enemyClass.accuracy *= 0.8;
		enemyClass.damage *= 1;
	}
	
	if (enemyClass.class === "caster") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1;
		advantage = "Increased Accuracy!";
		enemyClass.accuracy *= 1.2;
		enemyClass.damage *= 1;
	}
	
	if (enemyClass.class === "archer") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1;
		advantage = "Increased Accuracy!";
		enemyClass.accuracy *= 0.9;
		enemyClass.damage *= 1;
	}
}

// caster vs
if (userClass.class === "caster") {
	if (enemyClass.class === "sword") {
		userClass.accuracy *= 1.2;
		userClass.damage *= 1;
		advantage = "Increased Accuracy!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1.1;
	}
	
	if (enemyClass.class === "axe") {
		userClass.accuracy *= 1.2;
		userClass.damage *= 1;
		advantage = "Increased Accuracy!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1.2;
	}
	
	if (enemyClass.class === "spear") {
		userClass.accuracy *= 1.2;
		userClass.damage *= 1;
		advantage = "Increased Accuracy!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1;
	}
	
	if (enemyClass.class === "archer") {
		userClass.accuracy *= 1.2;
		userClass.damage *= 1;
		advantage = "Increased Accuracy!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1.2;
	}
}

// archer vs
if (userClass.class === "archer") {
	if (enemyClass.class === "sword") {
		userClass.accuracy *= 0.9;
		userClass.damage *= 1;
		advantage = "Decreased Accuracy!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1;
	}
	
	if (enemyClass.class === "axe") {
		userClass.accuracy *= 1;
		userClass.damage *= 1;
		advantage = "No Advantages!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1.2;
	}
	
	if (enemyClass.class === "spear") {
		userClass.accuracy *= 0.9;
		userClass.damage *= 1;
		advantage = "Decreased Accuracy!";
		enemyClass.accuracy *= 1.1;
		enemyClass.damage *= 1;
	}
	
	if (enemyClass.class === "caster") {
		userClass.accuracy *= 1.1;
		userClass.damage *= 1.2;
		advantage = "Increased Accuracy and Damage!";
		enemyClass.accuracy *= 1.2;
		enemyClass.damage *= 1;
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
document.getElementById("sword").addEventListener ("click", chooseClass(), false);
document.getElementById("axe").addEventListener ("click", chooseClass(), false);
document.getElementById("spear").addEventListener ("click", chooseClass(), false);
document.getElementById("caster").addEventListener ("click", chooseClass(), false);
document.getElementById("archer").addEventListener ("click", chooseClass(), false);

var advantageDIV = document.getElementById("advantage");
    advantageDIV.innerHTML = ("<p>" + advantage + "</p>");

var battleDIV = document.getElementById("battle");
    battleDIV.innerHTML = ("<p>" + " " + "</p>");
var matchupDIV = document.getElementById("matchup");
	matchupDIV.innerHTML = ("<p>" + matchup + "</p>");

var userClassDIV = document.getElementById("className");
    userClassDIV.innerHTML = ("Class: " + "<span class='stats'>" + userClass.class + "</p>");
var userHPDIV = document.getElementById("classHP");
    userHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + userClass.hitPoints + "</p>");
var userArmorDIV = document.getElementById("classArmor");
    userArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + userClass.armor + "</p>");
var userDamageDIV = document.getElementById("classDamage");
    userDamageDIV.innerHTML = ("Damage" + "<span class='stats'>" + Math.round(userClass.damage, 0) + "</p>");
var userAccuracyDIV = document.getElementById("classAccuracy");
    userAccuracyDIV.innerHTML = ("Accuracy: " + "<span class='stats'>" + Math.round(userClass.accuracy, 0) + "</p>");
var userCriticalDIV = document.getElementById("classCritical");
    userCriticalDIV.innerHTML = ("Critical: " + "<span class='stats'>" + userClass.critical + "</p>");

var enemyClassDIV = document.getElementById("enemyName");
    enemyClassDIV.innerHTML = ("Class: " + "<span class='stats'>" + enemyClass.class + "</p>");
var enemyHPDIV = document.getElementById("enemyHP");
    enemyHPDIV.innerHTML = ("HP: " + "<span class='stats'>" + enemyClass.hitPoints + "</p>");
var enemyArmorDIV = document.getElementById("enemyArmor");
    enemyArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + enemyClass.armor + "</p>");
var enemyDamageDIV = document.getElementById("enemyDamage");
    enemyDamageDIV.innerHTML = ("Damage" + "<span class='stats'>" + Math.round(enemyClass.damage, 0) + "</p>");
var enemyAccuracyDIV = document.getElementById("enemyAccuracy");
    enemyAccuracyDIV.innerHTML = ("Accuracy: " + "<span class='stats'>" + Math.round(enemyClass.accuracy, 0) + "</p>");
var enemyCriticalDIV = document.getElementById("enemyCritical");
    enemyCriticalDIV.innerHTML = ("Critical: " + "<span class='stats'>" + enemyClass.critical + "</p>");


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

var damageThisRound = Math.round(userClass.damage * (1-(0+(enemyClass.armor *0.01))), 0);

var damageReset = damageThisRound;
var totalDamage = 0;

var damageThisRound_enemy = Math.round(enemyClass.damage * (1-(0+(userClass.armor * 0.01))), 0);
var damageReset_enemy = damageThisRound_enemy;
var totalDamage_enemy = 0;

var i = 1;

function combat() {	
	
    if(totalDamage < enemyClass.hitPoints || totalDamage_enemy < userClass.hitPoints) {
		var randomRoll_1 = Math.round(Math.random() * 100);
		var randomRoll_2 = Math.round(Math.random() * 100);
		var randomRoll_3 = Math.round(Math.random() * 100);
        var randomRoll_4 = Math.round(Math.random() * 100);
		var hitCheck = randomRoll_1 <= userClass.accuracy;
		var skillShot = randomRoll_2 <= userClass.skillShot;
		var critHit = randomRoll_3 <= userClass.critical;
      
        var randomRoll_1_enemy = Math.round(Math.random() * 100);
		var randomRoll_2_enemy = Math.round(Math.random() * 100);
		var randomRoll_3_enemy = Math.round(Math.random() * 100);
        var randomRoll_4_enemy = Math.round(Math.random() * 100);
		var hitCheck_enemy = randomRoll_1_enemy <= enemyClass.accuracy;
		var skillShot_enemy = randomRoll_2_enemy <= enemyClass.skillShot;
		var critHit_enemy = randomRoll_3_enemy <= enemyClass.critical;
      
	
	if (hitCheck) {
        damageThisRound *= dmgRng(8,10);
		console.log("Round " + i);
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "Round " + i + "</p>");
        if (skillShot) {
          if (userClass.class === "sword") {
			damageThisRound *= 1.8 * dmgRng(8,10);
			console.log("You used your special skill! Double Strike!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Double Strike!" + "</p>");
          }
          if (userClass.class === "axe") {
			damageThisRound = damageThisRound * 2 * dmgRng(8,10);
			console.log("You used your special skill! Skull Splitter!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Skull Splitter!" + "</p>");
          }
          if (userClass.class === "spear") {
			userClass.armor = userClass.armor * 2;
			console.log("You used your special skill! Bolster!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Bolster!" + "</p>");
            userArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + userClass.armor + "</p>");
          }
          if (userClass.class === "caster") {
			damageThisRound *= 3 * dmgRng(7,10);
			console.log("You used your special skill! Elemental Destruction!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Elemental Destruction!" + "</p>");
          }
          if (userClass.class === "archer") {
			damageThisRound = Math.round(userClass.damage);
			console.log("You used your special skill! Armor Pierce!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Armor Pierce!" + "</p>");
          }
		}
		if (critHit) {
			damageThisRound *= 1.5 * dmgRng(8,10);
			console.log("Critical Hit!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Critical Hit!" + "</p>");
		}
		console.log("You hit for " + damageThisRound + " damage!");
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "You hit for " + damageThisRound + " damage!" + "</p>");
		totalDamage += damageThisRound;
		console.log(randomRoll_1 + " vs " + Math.round(userClass.accuracy) + " accuracy.");
		if (totalDamage >= enemyClass.hitPoints) {
				console.log("You killed the enemy!");
				battleDIV.insertAdjacentHTML("beforeend","<p>" + "You killed the enemy!" + "</p>");
          return true;
			}
		damageThisRound = damageReset;
		}
        
        if (randomRoll_1 > userClass.accuracy) {
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Round " + i + "</p>");
            console.log("You miss!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You miss!" + "</p>");
			console.log(randomRoll_1 + " vs " + Math.round(userClass.accuracy) + " accuracy.");
			damageThisRound = damageReset;
        }
      
      
      if (hitCheck_enemy) {
        damageThisRound_enemy *= dmgRng(8,10);
        if (skillShot_enemy) {
          if (enemyClass.class === "sword") {
			damageThisRound_enemy *= 1.8 * dmgRng(8,10);
			console.log("The enemy used their skill! Double Strike!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Double Strike!" + "</p>");
          }
          if (enemyClass.class === "axe") {
			damageThisRound_enemy = Math.round(enemyClass.damage - (userClass.armor * 0.7)) * 2 * dmgRng(8,10);
			console.log("The enemy used their special skill! Skull Splitter!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Skull Splitter!" + "</p>");
          }
          if (enemyClass.class === "spear") {
			enemyClass.armor = enemyClass.armor * 2;
			console.log("The enemy used their special skill! Bolster!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Bolster!" + "</p>");
            userArmorDIV.innerHTML = ("Armor: " + "<span class='stats'>" + enemyClass.armor + "</p>");
            
          }
          if (enemyClass.class === "caster") {
			damageThisRound_enemy *= 3 * dmgRng(8,10);
			console.log("You used your special skill! Elemental Destruction!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Elemental Destruction!" + "</p>");
          }
          if (enemyClass.class === "archer") {
			damageThisRound_enemy = Math.round(enemyClass.damage);
			console.log("The enemy used their special skill! Armor Pierce!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy used their special skill! Armor Pierce!" + "</p>");
          }
		}
		if (critHit_enemy) {
			damageThisRound_enemy *= 1.5 * dmgRng(8,10);
			console.log("Critical Hit!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Critical Hit!" + "</p>");
		}
		console.log("Enemy hit you for " + damageThisRound_enemy + " damage!");
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy hit you for " + damageThisRound_enemy + " damage!" + "</p>");
		totalDamage_enemy += damageThisRound_enemy;
		console.log(randomRoll_1_enemy + " vs " + Math.round(enemyClass.accuracy) + " accuracy.");
		i++;
		if (totalDamage_enemy >= userClass.hitPoints) {
				console.log("The enemy killed you!");
				battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy killed you!" + "</p>");
          return true;
			}
		damageThisRound_enemy = damageReset_enemy;
		}
        
        if (randomRoll_1_enemy > enemyClass.accuracy) {
            console.log("The enemy missed!!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "The enemy missed!" + "</p>");
			console.log(randomRoll_1_enemy + " vs " + Math.round(userClass.accuracy) + " accuracy.");
			damageThisRound_enemy = damageReset;
			i++;
        }
        }
  return false;
}

function combatRound(){
    var play combat();       // Fight and check if anybody is dead
    if(play === false){       // If nobody is dead then do another round
        setTimeout(combatRound, 1000);
    }
}

//combatRound();