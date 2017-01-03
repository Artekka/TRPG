
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
    critical: 20
};

charClasses.axe = {
    class: "axe",
    hitPoints: 900,
	armor: 40,
    damage: 120,
    accuracy: 70,
    critical: 15
};

charClasses.caster = {
    class: "caster",
    hitPoints: 700,
	armor: 10,
    damage: 100,
    accuracy: 85,
    critical: 10
};

charClasses.spear = {
    class: "spear",
    hitPoints: 1000,
	armor: 60,
    damage: 100,
    accuracy: 80,
    critical: 15
};

charClasses.sword = {
    class: "sword",
    hitPoints: 1100,
	armor: 70,
    damage: 90,
    accuracy: 85,
    critical: 10
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

/*****************************	
Combat Mechanics
*****************************/

var damageThisRound = Math.round(userClass.damage - enemyClass.armor);
var damageReset = damageThisRound;
var totalDamage = 0;

var combat = true;

while(combat) {
	
var i = 1;
	
    while(totalDamage < enemyClass.hitPoints) {
		var randomRoll = Math.round(Math.random() * 100);
		var randomRoll_2 = Math.round(Math.random() * 100);
		var randomRoll_3 = Math.round(Math.random() * 100);
        var randomRoll_4 = Math.round(Math.random() * 100);
		var hitCheck = randomRoll <= userClass.accuracy;
		var doubleStrike = randomRoll_2 <= 10;
		var critHit = randomRoll_3 <= userClass.critical;
        var armorPierce = randomRoll_4 <= 25;
	
	if (hitCheck) {
		console.log("Round " + i);
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "Round " + i + "</p>");
		if (doubleStrike) {
			damageThisRound *= 2;
			console.log("Double Strike!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Double Strike!" + "</p>");
		}
        if (armorPierce) {
			damageThisRound = Math.round(userClass.damage);
			console.log("Armor Pierced!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Armor Pierced!" + "</p>");
		}
		if (critHit) {
			damageThisRound *= 1.5;
			console.log("Critical Hit!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Critical Hit!" + "</p>");
		}
		console.log("You hit for " + damageThisRound + " damage!");
		battleDIV.insertAdjacentHTML("beforeend","<p>" + "You hit for " + damageThisRound + " damage!" + "</p>");
		totalDamage += damageThisRound;
		console.log(randomRoll + " vs " + Math.round(userClass.accuracy) + " accuracy.");
		i++;
		if (totalDamage >= enemyClass.hitPoints) {
				console.log("You killed the enemy!");
				battleDIV.insertAdjacentHTML("beforeend","<p>" + "You killed the enemy!" + "</p>");
				combat = false;
				break;
			}
		damageThisRound = damageReset;
		}
        
        if (randomRoll > userClass.accuracy) {
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "Round " + i + "</p>");
            console.log("You miss!");
			battleDIV.insertAdjacentHTML("beforeend","<p>" + "You miss!" + "</p>");
			console.log(randomRoll + " vs " + Math.round(userClass.accuracy) + " accuracy.");
			damageThisRound = damageReset;
			i++;
        }
	}
	
	combat = false;
}
