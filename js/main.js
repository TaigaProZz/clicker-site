import Player from './classes/player.js';
import Monster from './classes/monster.js';
import Characters from './classes/characters.js';
import Save from './classes/save.js';

// Create the player
var player = new Player();

// Create the monster
var monster = new Monster(20, 'Psykokwak');

// Click on monster event
$('#monsterOnClick').click(() => {
	player = new Player();

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
		// console.log(player.getBank());
		// console.log(playerBank);



	}
});

// Save
var save = new Save(player, monster);

// Characters
var characters = new Characters();
characters.display(player);

