import Player from './classes/player.js';
import Monster from './classes/monster.js';
import Characters from './classes/characters.js';
import Save from './classes/save.js';

// Create the player
var player = new Player();

// Create the monster
var monster = new Monster(10, 'Psykokwak');

// Click on monster event
$('#monsterOnClick').click(() => {
	let monsterHealth = monster.getHealth();
	let monsterName = monster.getName();
	let playerAttack = player.getAttack();
	let playerBank = player.getBank();

	if (monsterHealth > playerAttack) {
		monsterHealth = monsterHealth - playerAttack;
		monster.setHealth(monsterHealth);
		console.log(monsterName + ' is alive with ' + monsterHealth + ' health');
	} else {
		console.log('You killed ' + monsterName + '! You earned ' + playerBank + ' + 1$');
		monster.resetHealth();
		player.setBank(playerBank + 1);
	}
});

// Save
var save = new Save(player, monster);

// Characters
var characters = new Characters();
characters.display();
