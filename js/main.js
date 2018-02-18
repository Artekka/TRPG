/* global Phaser */

var game = new Phaser.Game(
    1024, 768, 
    Phaser.CANVAS, null, 
    {
        preload: preload,
        create: create,
        update: update,
        render: render
    });

// Declaring any shared or global vars (outside of functions)
var player, enemy, keyInputs, guideText, displayGuide;
    
function preload() {
    // We use this to load all of the graphics and/or audio assets in this block of code        
    // game.load.image(asset_id, path_to_asset)
    
    // Map
    var bg, grid;
    game.load.image("bg","img/map_openfield.png");
    game.load.image("grid","img/map_grid_1024x768.png");
    
    // Characters
    game.load.spritesheet("player", "img/crusader_se_atk.png", 170, 95);
    game.load.spritesheet("enemy", "img/crusader_sw_atk.png", 170, 95);
    
    // Other elements to preload
    var playerButtonAttack, playerButtonDefend, playerButtonSpecial;
    
    var enemyButtonAttack, enemyButtonDefend, enemyButtonSpecial;
    
    var dodge1, dodge2;
    
    game.load.image("playerButtonAttack","img/button_attack.png");
    game.load.image("playerButtonDefend","img/button_defend.png");
    game.load.image("playerButtonSpecial","img/button_special.png");
    
    game.load.image("enemyButtonAttack","img/button_attack.png");
    game.load.image("enemyButtonDefend","img/button_defend.png");
    game.load.image("enemyButtonSpecial","img/button_special.png");
}

function create() {
    // We use this to create the world with our preloaded assets
    // game.add.sprite(x, y, asset_id)
    
    // Map
    
    var bg = game.add.image(0, 0, "bg");
    var grid = game.add.image(0, 0, "grid");
    
    // Units
    player = game.add.sprite(64*4, 64*6, "player");
    player.frame = 0;
    player.animations.add("attack", [0, 1, 2, 3, 4, 5, 6, 0], 21, false);
    player.animations.add("special", [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0], 42, false);
    
    enemy = game.add.sprite(64*8, 64*6, "enemy");
    enemy.frame = 0;
    enemy.animations.add("attack", [0, 1, 2, 3, 4, 5, 6, 0], 21, false);
    enemy.animations.add("special", [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0], 42, false);
    
    classSelect("sword");
    classSelect_enemy("archer");
    
    // Other elements
    // Actions
    var playerButtonAttack, playerButtonDefend, playerButtonSpecial;
    var enemyButtonAttack, enemyButtonDefend, enemyButtonSpecial;
    
    playerButtonAttack = game.add.button(player.x - 256, player.y - 50, 'playerButtonAttack', playerAttack, this, 2, 1, 0);
    playerButtonDefend = game.add.button(player.x - 256, player.y, 'playerButtonDefend', playerDefend, this, 2, 1, 0);
    playerButtonSpecial = game.add.button(player.x - 256, player.y + 50, 'playerButtonSpecial', playerSpecial, this, 2, 1, 0);
    
    enemyButtonAttack = game.add.button(enemy.x + 256, enemy.y - 50, 'enemyButtonAttack', enemyAttack, this, 2, 1, 0);
    enemyButtonDefend = game.add.button(enemy.x + 256, enemy.y, 'enemyButtonDefend', enemyDefend, this, 2, 1, 0);
    enemyButtonSpecial = game.add.button(enemy.x + 256, enemy.y + 50, 'enemyButtonSpecial', enemySpecial, this, 2, 1, 0);
    
    // Grouping
    
    var playerMenuGroup = game.add.group();
    playerMenuGroup.add(playerButtonAttack);
    playerMenuGroup.add(playerButtonDefend);
    playerMenuGroup.add(playerButtonSpecial);
    
    var enemyMenuGroup = game.add.group();
    enemyMenuGroup.add(enemyButtonAttack);
    enemyMenuGroup.add(enemyButtonDefend);
    enemyMenuGroup.add(enemyButtonSpecial);
    
    playerMenuGroup.visible = false;
    enemyMenuGroup.visible = false;
    
    // Physics and collision detection
    // Phase has arcade and p2 physics systems to use
    // game.physics.enable(asset_id, physics_system)
    game.physics.enable(player, Phaser.Physics.ARCADE);
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    
    player.body.collideWorldBounds = true;
    enemy.body.collideWorldBounds = true;
    
    // Debug text here

    guideText = "Click each unit to display an action menu. Each action does stuff! \n";
    guideText += "Units move based on a 64px grid currently. Drag a unit and it will snap to the grid. \n";
    guideText += "Arrow keys will do the same. Current keyboard movement is tied to both units arbitrarily/on purpose.";
    
    var textStyle = {
        font: "20px Arial",
        fill: "#fff",
        backgroundColor: "#000"
    };
    
    //game.add.text(x, y, value_to_display, value_styling)
    
    displayGuide = game.add.text(50, 650, guideText, textStyle);
    
    
    // setting keyboard inputs for game to recognize
    keyInputs = game.input.keyboard.createCursorKeys();
    
    // defining specific keys. Fix.
    var k_tilde = game.input.keyboard.addKey(Phaser.Keyboard.TILDE);
    var k_spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    player.inputEnabled = true;
    player.input.enableDrag();
    player.events.onInputDown.add(playerMenu, this);
    
    enemy.inputEnabled = true;
    enemy.input.enableDrag();
    enemy.events.onInputDown.add(enemyMenu, this);
    
    // Enable "Snapping" to my grid/tile based map and movement
    player.input.enableSnap(64, 64, false, true);
    enemy.input.enableSnap(64, 64, false, true);
    
    function playerMenu() {
        if(playerMenuGroup.visible) {
            playerMenuGroup.visible = false;
        } else {
            playerMenuGroup.visible = true;
        }
    }
    
    function enemyMenu() {
        if(enemyMenuGroup.visible) {
            enemyMenuGroup.visible = false;
        } else {
            enemyMenuGroup.visible = true;
        }
    }
    
    function playerAttack(sprite, pointer) {
        player.animations.play("attack");
        combat(player, enemy);
    }
    function playerDefend(sprite, pointer) {
        dodge(1,0,player);
        
    }
    function playerSpecial(sprite, pointer) {
        player.animations.play("special");
    }
    
    function enemyAttack(sprite, pointer) {
        enemy.animations.play("attack");
        combat(enemy, player);
    }
    function enemyDefend(sprite, pointer) {
        dodge(-1,0,enemy);
    }
    function enemySpecial(sprite, pointer) {
        enemy.animations.play("special");
    }
    
    // Attach these functions to the action menu since animations aren't playable yet!
    
}

function update() {
    // Game Loop goes here
    
    // This is where we check states for any events that occur
    // Use boolean to determine true/false w/ if (keyInputs.key_input.isDown/Up/whatever)
    if (keyInputs.up.isDown) {
        moveUnit(0,-1,player);
        moveUnit(0,-1,enemy);
    }
    
    if (keyInputs.down.isDown) {
        moveUnit(0,1,player);
        moveUnit(0,1,enemy);
    }
    
    if (keyInputs.left.isDown) {
        moveUnit(-1,0,player);
        moveUnit(1,0,enemy);
    }
    
    if (keyInputs.right.isDown) {
        moveUnit(1,0,player);
        moveUnit(-1,0,enemy);
    }
    
    // Check for physics
    //game.physics.arcade.overlap(player, enemy, scoring);
    
}

function render() {
    // debug info here
    //game.debug.spriteInfo(player, 100, 100);
    //game.debug.spriteInfo(enemy, 524, 100);
    
    function displayDebugInfoPlayer() {
        this.game.debug.start(32, 64);
        this.game.debug.line(`Class: ${this.player.className}`);
        this.game.debug.line(`Hit Points: ${this.player.hitPoints}/${this.player.maxHitPoints}`);
        this.game.debug.line(`Damage: ${this.player.damage}`);
        this.game.debug.line(`Armor: ${this.player.armor}`);
        this.game.debug.line(`Accuracy %: ${this.player.accuracy}`);
        this.game.debug.line(`Critical %: ${this.player.critical}`);
        this.game.debug.line(`Skill Shot %: ${this.player.skillShot}`);
    }
    function displayDebugInfoEnemy() {
        this.game.debug.start(640, 64);
        this.game.debug.line(`Class: ${this.enemy.className}`);
        this.game.debug.line(`Hit Points: ${this.enemy.hitPoints}/${this.enemy.maxHitPoints}`);
        this.game.debug.line(`Damage: ${this.enemy.damage}`);
        this.game.debug.line(`Armor: ${this.enemy.armor}`);
        this.game.debug.line(`Accuracy %: ${this.enemy.accuracy}`);
        this.game.debug.line(`Critical %: ${this.enemy.critical}`);
        this.game.debug.line(`Skill Shot %: ${this.enemy.skillShot}`);
    }
    displayDebugInfoPlayer();
    displayDebugInfoEnemy();
}

// Function for collision event


// Unit Movement
function moveUnit(x, y, sprite) {
    // Ripped from - http://www.html5gamedevs.com/topic/7361-tile-based-movement/
    // Because we're adding 64 to the player's position, we need to prevent cases where the user tries to move  
    // the player mid-move, knocking it off the grid. This is a crude way to do it but it works.  
    if (sprite.isMoving) { 
        return; 
    }  
    sprite.isMoving = true;  
    // Tween the player to the next grid space over 100ms, and when done, allow the player to make another move
    game.add.tween(sprite).to({
        x: sprite.x + x * 64, 
        y: sprite.y + y * 64
    }, 100, Phaser.Easing.Quadratic.InOut, true).onComplete.add(function() {
        sprite.isMoving = false;}, this);
}

function dodge(x, y, sprite) {
    dodge1 = game.add.tween(sprite).to( { x: sprite.x - x * 64 }, 100, Phaser.Easing.Quadratic.InOut);
    dodge2 = game.add.tween(sprite).to( { x: sprite.x }, 100, Phaser.Easing.Quadratic.InOut);
    dodge1.chain(dodge2);
    
    dodge1.start();
}


function toggleGrid() {
    
}

function combat(sprite1, sprite2) {
/*  
    var damage = sprite1.damage - sprite2.armor;
    sprite2.hitPoints -= damage;
    console.log(sprite2.hp);
    return sprite2.hp;
*/

/*****************************	
Combat Mechanics
*****************************/
var i = 1;

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

var damageThisRound = Math.round(player.damage * (1-(0+(enemy.armor *0.01))), 0);

var damageReset = damageThisRound;

var damageThisRound_enemy = Math.round(enemy.damage * (1-(0+(player.armor * 0.01))), 0);
var damageReset_enemy = damageThisRound_enemy;

  if(enemy.hitPoints >= 0 || player.hitPoints >= 0) {
		var randomRoll_1 = Math.round(Math.random() * 100);
		var randomRoll_2 = Math.round(Math.random() * 100);
		var randomRoll_3 = Math.round(Math.random() * 100);
    var randomRoll_4 = Math.round(Math.random() * 100);
		var hitCheck = randomRoll_1 <= player.accuracy;
		var skillShot = randomRoll_2 <= player.skillShot;
		var critHit = randomRoll_3 <= player.critical;
      
    var randomRoll_1_enemy = Math.round(Math.random() * 100);
		var randomRoll_2_enemy = Math.round(Math.random() * 100);
		var randomRoll_3_enemy = Math.round(Math.random() * 100);
    var randomRoll_4_enemy = Math.round(Math.random() * 100);
		var hitCheck_enemy = randomRoll_1_enemy <= enemy.accuracy;
		var skillShot_enemy = randomRoll_2_enemy <= enemy.skillShot;
		var critHit_enemy = randomRoll_3_enemy <= enemy.critical;
   
	
	if (hitCheck) {
        damageThisRound = Math.round(player.damage * (1-(0+(enemy.armor *0.01))), 0);
        damageThisRound *= dmgRng(8,10);
        damageThisRound = Math.round(damageThisRound, 0);
		
        if (skillShot) {
          if (player.className === "Sword") {
			damageThisRound *= 2.1 * dmgRng(8,10);
            damageThisRound = Math.round(damageThisRound, 0);
			game.debug.text("You used your special skill! Double Strike!",0,0);
          }
          if (player.className === "Axe") {
			damageThisRound = (player.damage - (enemy.armor * 0.7)) * 2 * dmgRng(8,10);
            damageThisRound = Math.round(damageThisRound, 0);
			console.log("You used your special skill! Skull Splitter!");
          }
          if (player.className === "Spear") {
			player.armor = player.armor * 2;
			console.log("You used your special skill! Bolster!");
          }
          if (player.className === "Caster") {
			damageThisRound *= 3 * dmgRng(7,10);
            damageThisRound = Math.round(damageThisRound, 0);
			console.log("You used your special skill! Elemental Destruction!");
          }
          if (player.className === "Archer") {
			damageThisRound = player.damage;
			console.log("You used your special skill! Armor Pierce!");
          }
		}
		if (critHit) {
			damageThisRound *= 1.5 * dmgRng(8,10);
            damageThisRound = Math.round(damageThisRound, 0);
			console.log("Critical Hit!");
		}
		console.log("You hit for " + damageThisRound + " damage!");
		enemy.hitPoints -= Math.round(damageThisRound, 0);
 
		if (enemy.hitPoints <= 0) {
                enemy.hitPoints = 0;
                enemy.isAlive = false;
				console.log("You killed the enemy!");
          
          return true;
			}
      
		damageThisRound = damageReset;
		}
        
        if (randomRoll_1 > player.accuracy) {
            console.log("You miss!");
			console.log(randomRoll_1 + " vs " + Math.round(player.accuracy) + " accuracy.");
			damageThisRound = damageReset;
        }
      
      
      if (hitCheck_enemy) {
        damageThisRound_enemy = Math.round(enemy.damage * (1-(0+(player.armor * 0.01))), 0);
        damageThisRound_enemy *= dmgRng(8,10);
        damageThisRound_enemy = Math.round(damageThisRound_enemy, 0);
        if (skillShot_enemy) {
          if (enemy.className === "Sword") {
			damageThisRound_enemy *= 2.1 * dmgRng(8,10);
            damageThisRound_enemy = Math.round(damageThisRound_enemy, 0);
			console.log("The enemy used their skill! Double Strike!");
          }
          if (enemy.className === "Axe") {
			damageThisRound_enemy = (enemy.damage - (player.armor * 0.7)) * 2 * dmgRng(8,10);
            damageThisRound_enemy = Math.round(damageThisRound_enemy, 0);
			console.log("The enemy used their special skill! Skull Splitter!");
          }
          if (enemy.className === "Spear") {
			enemyClass.armor = enemy.armor * 1.2;
			console.log("The enemy used their special skill! Bolster!");
            
          }
          if (enemy.className === "Caster") {
			damageThisRound_enemy *= 3 * dmgRng(8,10);
			console.log("You used your special skill! Elemental Destruction!");
          }
          if (enemy.className === "Archer") {
			damageThisRound_enemy = enemy.damage;
			console.log("The enemy used their special skill! Armor Pierce!");
          }
		}
		if (critHit_enemy) {
			damageThisRound_enemy *= 1.5 * dmgRng(8,10);
            damageThisRound_enemy = Math.round(damageThisRound_enemy, 0);
			console.log("Critical Hit!");
		}
		console.log("enemy hit you for " + damageThisRound_enemy + " damage!");
		player.hitPoints -= Math.round(damageThisRound_enemy, 0);
		console.log(randomRoll_1_enemy + " vs " + Math.round(enemy.accuracy) + " accuracy.");
		i++;
		if (player.hitPoints <= 0) {
                player.hitPoints = 0;
                player.isAlive = false;
				console.log("The enemy killed you!");
          
          return true;
			}
		damageThisRound_enemy = damageReset_enemy;
		}
        
        if (randomRoll_1_enemy > enemy.accuracy) {
            console.log("The enemy missed!!");
			console.log(randomRoll_1_enemy + " vs " + Math.round(player.accuracy) + " accuracy.");
            
			damageThisRound_enemy = damageReset;
			i++;
          }
        }
}

// Eventually turn this into the class selection constructor
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

function enemyClass() {};

enemyClass.prototype = new baseClasses();



function classSelect(value) {
  if (value === "archer") {
    player.className = "Archer";
    player.hitPoints = 450;
    player.maxHitPoints = 450;
    player.damage = 100;
    player.armor = 20;
    player.accuracy = 75;
    player.critical = 20;
    player.skillShot = 20;
    player.isAlive = true;
    
    player.getClassName = function() {
      return this.className;
    }
    player.getHitPoints = function() {
      return this.hitPoints;
    }
    player.getDamage = function() {
      return this.damage;
    }
    player.getArmor = function() {
      return this.armor;
    }
    player.getAccuracy = function() {
      return this.accuracy;
    }
    player.getCritical = function() {
      return this.critical;
    }
    player.getSkillShot = function() {
      return this.skillShot;
    }
    
    
    console.log("Class selected: " + player.className)
    return;
  }
  if (value === "sword") {
    player.className = "Sword";
    player.hitPoints = 600;
    player.maxHitPoints = 600;
    player.damage = 90;
    player.armor = 70;
    player.accuracy = 85;
    player.critical = 10;
    player.skillShot = 20;
    player.isAlive = true;
    
    player.getClassName = function() {
      return this.className;
    }
    player.getHitPoints = function() {
      return this.hitPoints;
    }
    player.getDamage = function() {
      return this.damage;
    }
    player.getArmor = function() {
      return this.armor;
    }
    player.getAccuracy = function() {
      return this.accuracy;
    }
    player.getCritical = function() {
      return this.critical;
    }
    player.getSkillShot = function() {
      return this.skillShot;
    }
    
    console.log("Class selected: " + player.className)
    return;
  }
  if (value === "axe") {
    player.className = "Axe";
    player.hitPoints = 500;
    player.maxHitPoints = 500;
    player.damage = 170;
    player.armor = 60;
    player.accuracy = 75;
    player.critical = 30;
    player.skillShot = 15;
    player.isAlive = true;
    
    player.getClassName = function() {
      return this.className;
    }
    player.getHitPoints = function() {
      return this.hitPoints;
    }
    player.getDamage = function() {
      return this.damage;
    }
    player.getArmor = function() {
      return this.armor;
    }
    player.getAccuracy = function() {
      return this.accuracy;
    }
    player.getCritical = function() {
      return this.critical;
    }
    player.getSkillShot = function() {
      return this.skillShot;
    }
    console.log("Class selected: " + player.className)
    return;
  }
  if (value === "caster") {
    player.className = "Caster";
    player.hitPoints = 300;
    player.maxHitPoints = 300;
    player.damage = 200;
    player.armor = 10;
    player.accuracy = 85;
    player.critical = 20;
    player.skillShot = 15;
    player.isAlive = true;
    
    player.getClassName = function() {
      return this.className;
    }
    player.getHitPoints = function() {
      return this.hitPoints;
    }
    player.getDamage = function() {
      return this.damage;
    }
    player.getArmor = function() {
      return this.armor;
    }
    player.getAccuracy = function() {
      return this.accuracy;
    }
    player.getCritical = function() {
      return this.critical;
    }
    player.getSkillShot = function() {
      return this.skillShot;
    }
    console.log("Class selected: " + player.className)
    return;
  }
  if (value === "spear") {
    player.className = "Spear";
    player.hitPoints = 550;
    player.maxHitPoints = 550;
    player.damage = 100;
    player.armor = 60;
    player.accuracy = 80;
    player.critical = 15;
    player.skillShot = 25;
    player.isAlive = true;
    
    player.getClassName = function() {
      return this.className;
    }
    player.getHitPoints = function() {
      return this.hitPoints;
    }
    player.getDamage = function() {
      return this.damage;
    }
    player.getArmor = function() {
      return this.armor;
    }
    player.getAccuracy = function() {
      return this.accuracy;
    }
    player.getCritical = function() {
      return this.critical;
    }
    player.getSkillShot = function() {
      return this.skillShot;
    }
    console.log("Class selected: " + player.className)
    return;
  }
  else {
    player.className = "None";
    player.hitPoints = 0;
    player.damage = 0;
    player.armor = 0;
    player.accuracy = 0;
    player.critical = 0;
    player.skillShot = 0;
    enemy.isAlive = false;
    
    console.log("Class selected: " + player.className)
    return;
  }


  
}

function classSelect_enemy(value) {
  if (value === "archer") {
    enemy.className = "Archer";
    enemy.hitPoints = 450;
    enemy.maxHitPoints = 450;
    enemy.damage = 100;
    enemy.armor = 20;
    enemy.accuracy = 75;
    enemy.critical = 20;
    enemy.skillShot = 20;
    enemy.isAlive = true;
    
    enemy.getClassName = function() {
      return this.className;
    }
    enemy.getHitPoints = function() {
      return this.hitPoints;
    }
    enemy.getDamage = function() {
      return this.damage;
    }
    enemy.getArmor = function() {
      return this.armor;
    }
    enemy.getAccuracy = function() {
      return this.accuracy;
    }
    enemy.getCritical = function() {
      return this.critical;
    }
    enemy.getSkillShot = function() {
      return this.skillShot;
    }
    console.log("enemy Class selected: " + enemy.className)
    return;
  }
  if (value === "sword") {
    enemy.className = "Sword";
    enemy.hitPoints = 600;
    enemy.maxHitPoints = 600;
    enemy.damage = 90;
    enemy.armor = 70;
    enemy.accuracy = 85;
    enemy.critical = 10;
    enemy.skillShot = 20;
    enemy.isAlive = true;
    
    enemy.getClassName = function() {
      return this.className;
    }
    enemy.getHitPoints = function() {
      return this.hitPoints;
    }
    enemy.getDamage = function() {
      return this.damage;
    }
    enemy.getArmor = function() {
      return this.armor;
    }
    enemy.getAccuracy = function() {
      return this.accuracy;
    }
    enemy.getCritical = function() {
      return this.critical;
    }
    enemy.getSkillShot = function() {
      return this.skillShot;
    }
    console.log("enemy Class selected: " + enemy.className)
    return;
  }
  if (value === "axe") {
    enemy.className = "Axe";
    enemy.hitPoints = 500;
    enemy.maxHitPoints = 500;
    enemy.damage = 170;
    enemy.armor = 60;
    enemy.accuracy = 75;
    enemy.critical = 30;
    enemy.skillShot = 15;
    enemy.isAlive = true;
    
    enemy.getClassName = function() {
      return this.className;
    }
    enemy.getHitPoints = function() {
      return this.hitPoints;
    }
    enemy.getDamage = function() {
      return this.damage;
    }
    enemy.getArmor = function() {
      return this.armor;
    }
    enemy.getAccuracy = function() {
      return this.accuracy;
    }
    enemy.getCritical = function() {
      return this.critical;
    }
    enemy.getSkillShot = function() {
      return this.skillShot;
    }
    console.log("enemy Class selected: " + enemy.className)
    return;
  }
  if (value === "caster") {
    enemy.className = "Caster";
    enemy.hitPoints = 300;
    enemy.maxHitPoints = 300;
    enemy.damage = 200;
    enemy.armor = 10;
    enemy.accuracy = 85;
    enemy.critical = 20;
    enemy.skillShot = 15;
    enemy.isAlive = true;
    
    enemy.getClassName = function() {
      return this.className;
    }
    enemy.getHitPoints = function() {
      return this.hitPoints;
    }
    enemy.getDamage = function() {
      return this.damage;
    }
    enemy.getArmor = function() {
      return this.armor;
    }
    enemy.getAccuracy = function() {
      return this.accuracy;
    }
    enemy.getCritical = function() {
      return this.critical;
    }
    enemy.getSkillShot = function() {
      return this.skillShot;
    }
    console.log("enemy Class selected: " + enemy.className)
    return;
  }
  if (value === "spear") {
    enemy.className = "Spear";
    enemy.hitPoints = 550;
    enemy.maxHitPoints = 550;
    enemy.damage = 100;
    enemy.armor = 60;
    enemy.accuracy = 80;
    enemy.critical = 15;
    enemy.skillShot = 25;
    enemy.isAlive = true;
    
    enemy.getClassName = function() {
      return this.className;
    }
    enemy.getHitPoints = function() {
      return this.hitPoints;
    }
    enemy.getDamage = function() {
      return this.damage;
    }
    enemy.getArmor = function() {
      return this.armor;
    }
    enemy.getAccuracy = function() {
      return this.accuracy;
    }
    enemy.getCritical = function() {
      return this.critical;
    }
    enemy.getSkillShot = function() {
      return this.skillShot;
    }
    console.log("enemy Class selected: " + enemy.className)
    return;
  }
  else {
    enemy.className = "None";
    enemy.hitPoints = 0;
    enemy.damage = 0;
    enemy.armor = 0;
    enemy.accuracy = 0;
    enemy.critical = 0;
    enemy.skillShot = 0;
    enemy.isAlive = false;
    
    
    console.log("enemy Class selected: " + enemy.className)
    return;
  }

 
}
