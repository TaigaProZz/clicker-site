import Player from './classes/player.js';
import PokemonOwned from './classes/pokemon-owned-propreties.js';
import PokemonOwnedClass from './classes/pokemon-owned-constructor.js';
import Save from './classes/save.js';
import WildPokemon from './classes/wild-pokemon.js';

// Create the player
var player = new Player();

// Create the wildPokemon
var wildPokemon = new WildPokemon(20, 'Psykokwak');

// Pokemon Owned
var pokemonOwned = new PokemonOwned();
pokemonOwned.display(player);

	
// Click on wildPokemon event
$('#wildPokemonOnClick').click((ev) => {
	let wildPokemonHealth = wildPokemon.getHealth();
	let playerAttack = player.getAttack();

	if (wildPokemonHealth > playerAttack) {
		wildPokemonHealth = wildPokemonHealth - playerAttack;
		wildPokemon.setHealth(wildPokemonHealth);
	
	} else {
		var playerBank = player.getBank();	
		wildPokemon.resetHealth();
		playerBank = playerBank + 1;
		player.setBank(playerBank);
	}
});


// every second, attack the wildPokemon with pokemons dps and check if wildPokemon is dead
setInterval(() => {	
	var pokemon = new PokemonOwnedClass();	
	pokemonOwned.attackWildPokemonWithDps(wildPokemon, pokemon)
	checkIfWildPokemonIsDead(player, wildPokemon)
}, 1000);

$('#click-lvl-up-btn').click(() => {
	var playerBank = player.getBank();
	if (playerBank >= 1) {
		var playerAttack = player.getAttack();
		var clickLvl = player.getClickLvl();
		
		playerAttack = playerAttack + 1;
		clickLvl = clickLvl + 1;	
		playerBank = playerBank - 1;
		
		player.setAttack(playerAttack);
		player.setBank(playerBank);
		player.setClickLvl(clickLvl);
		
		player.updateLocalStorage()
		$('#dpc').text(playerAttack + ' dégats par clicks');
		$('#click-attack').text('Attaque ' + playerAttack).css('color', '#00ff00');
		$('#click-lvl').text('Niveau click ' + clickLvl);
		$('#bank-box-text').text(playerBank);
	} else {
			// if player doesn't have enough money, display a message
			$('#liveToast').toast('show'); 		 
	}
});



function checkIfWildPokemonIsDead(player, wildPokemon) {
	var wildPokemonHealth = wildPokemon.getHealth();
	if (wildPokemonHealth <= 0) {
		var playerBank = player.getBank();		
		wildPokemon.resetHealth();
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
$('#exportJson').click(save.exportJson.bind(save));
$('#importJson').change(save.importJson.bind(save));




$("#savepkmns").click(() => {
	pokemonOwned.savePokemons();
});