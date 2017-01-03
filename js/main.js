
/*****************************
Character Classes
*****************************/

var charClasses = {};

charClasses.archer = {
    class: "archer",
    hitPoints: 900,
	armor: 20,
    damage: 100,
    accuracy: 75,
    critical: 20,
    skillShot: 20
};

charClasses.axe = {
    class: "axe",
    hitPoints: 900,
	armor: 40,
    damage: 120,
    accuracy: 70,
    critical: 15,
    skillShot: 15
};

charClasses.caster = {
    class: "caster",
    hitPoints: 700,
	armor: 10,
    damage: 200,
    accuracy: 85,
    critical: 10,
    skillShot: 10
};

charClasses.spear = {
    class: "spear",
    hitPoints: 1000,
	armor: 60,
    damage: 100,
    accuracy: 80,
    critical: 15,
    skillShot: 25
};

charClasses.sword = {
    class: "sword",
    hitPoints: 1100,
	armor: 70,
    damage: 90,
    accuracy: 85,
    critical: 10,
    skillShot: 20
};



/*****************************
User Class
*****************************/

var userClass = prompt("Choose your class: sword | axe | spear | caster | archer").toLowerCase();

// Later - If other class is chosen, give error

	userClass = charClasses[userClass];

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

/*
Class Selection
*/

function chooseClass(value) {
	userClass.class = value;
}

/*****************************	
Combat
*****************************/

/*****************************	
UI
*****************************/

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

var damageThisRound = Math.round(userClass.damage - enemyClass.armor, 0);
var damageReset = damageThisRound;
var totalDamage = 0;

var damageThisRound_enemy = Math.round(enemyClass.damage - userClass.armor, 0);
var damageReset_enemy = damageThisRound_enemy;
var totalDamage_enemy = 0;

var combat = true;

while(combat) {
	
var i = 1;
	
    while(totalDamage < enemyClass.hitPoints || totalDamage_enemy < userClass.hitPoints) {
		var randomRoll_1 = Math.round(Math.random() * 100);
		var randomRoll_2 = Math.round(Math.random() * 100);
		var randomRoll_3 = Math.round(Math.random() * 100);
        var randomRoll_4 = Math.round(Math.random() * 100);
		var hitCheck = randomRoll_1 <= userClass.accuracy;
		var skillShot = randomRoll_2 <= userClass.skillShot;
		var critHit = randomRoll_3 <= userClass.critical;
	
	if (hitCheck) {
		console.log("Round " + i);
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "Round " + i + "</p>");
        if (skillShot) {
          if (userClass.class === "sword") {
			damageThisRound *= 1.8;
			console.log("You used your special skill! Double Strike!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You used your special skill! Double Strike!" + "</p>");
          }
          if (userClass.class === "axe") {
			damageThisRound = Math.round(userClass.damage - (enemyClass.armor * 0.7)) * 2;
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
			damageThisRound *= 3;
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
			damageThisRound *= 1.5;
			console.log("Critical Hit!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Critical Hit!" + "</p>");
		}
		console.log("You hit for " + damageThisRound + " damage!");
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "You hit for " + damageThisRound + " damage!" + "</p>");
		totalDamage += damageThisRound;
		console.log(randomRoll_1 + " vs " + Math.round(userClass.accuracy) + " accuracy.");
		i++;
		if (totalDamage >= enemyClass.hitPoints) {
				console.log("You killed the enemy!");
				battleDIV.insertAdjacentHTML("beforeend","<p>" + "You killed the enemy!" + "</p>");
				combat = false;
				break;
			}
		damageThisRound = damageReset;
		}
        
        if (randomRoll_1 > userClass.accuracy) {
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Round " + i + "</p>");
            console.log("You miss!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You miss!" + "</p>");
			console.log(randomRoll_1 + " vs " + Math.round(userClass.accuracy) + " accuracy.");
			damageThisRound = damageReset;
			i++;
        }
	}
	
	combat = false;
}
