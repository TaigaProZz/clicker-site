import Player from './classes/player.js';
import Monster from './classes/monster.js';
import Characters from './classes/characters.js';
import Character from './classes/character.js';

import Save from './classes/save.js';

// Create the player
var player = new Player();

// Create the monster
var monster = new Monster(20, 'Psykokwak');




// Click on monster event
$('#monsterOnClick').click(() => {
	let monsterHealth = monster.getHealth();
	let monsterName = monster.getName();
	let playerAttack = player.getAttack();


	if (monsterHealth > playerAttack) {
		monsterHealth = monsterHealth - playerAttack;
		monster.setHealth(monsterHealth);
	

	} else {
		var playerBank = player.getBank();
		
		monster.resetHealth();

		playerBank = playerBank + 1;
		player.setBank(playerBank);
	}
});

// Save json
var save = new Save(player);

// Characters
var characters = new Characters();
characters.display(player);

// character 
var character = new Character();
var dps = character.getTotalDps();


characters.attackMonsterWithDps(monster, character);
console.log(dps);

