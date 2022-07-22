import Player from './classes/player.js';
import Monster from './classes/monster.js';
import PokemonOwned from './classes/pokemon-owned-propreties.js';
import PokemonOwnedClass from './classes/pokemon-owned-constructor.js';
import Save from './classes/save.js';

// Create the player
var player = new Player();

// Create the monster
var monster = new Monster(20, 'Psykokwak');

// Pokemon Owned
var pokemonOwned = new PokemonOwned();
pokemonOwned.display(player);

// Pokemon 
var pokemon = new PokemonOwnedClass();

// Click on monster event
$('#monsterOnClick').click(() => {
	let monsterHealth = monster.getHealth();
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

// every second, attack the monster with pokemons dps and check if monster is dead
setInterval(() => {	
	pokemonOwned.attackMonsterWithDps(monster, pokemon)
	checkIfMonsterIsDead(player, monster)
}, 1000);

function checkIfMonsterIsDead(player, monster) {
	var monsterHealth = monster.getHealth();
	if (monsterHealth <= 0) {
		var playerBank = player.getBank();		
		monster.resetHealth();
		playerBank = playerBank + 1;
		player.setBank(playerBank);
	}
}
	
// pophover dps 
$('#popHoverDps').hover(() => {
	$('#popHoverDps').popover('show');
});

// pophover dpc
$('#popHoverDpc').hover(() => {
	$('#popHoverDpc').popover('show');
});

// Save json
var save = new Save(player);
