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

// shake the wild pokemon when the player click on it
$(function() {
    $('.monster-box').click(function(ev){

		$('.monster-display').addClass('shake'); 
		setTimeout(function(){
 
		$('div').removeClass('shake'); 
		},50);
		 ev.preventDefault();
	 });
 });


	
// Click on monster event
$('#monsterOnClick').click((ev) => {
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

$('#monsterOnClick').ready(function() {
   
});

// every second, attack the monster with pokemons dps and check if monster is dead
setInterval(() => {	
	var pokemon = new PokemonOwnedClass();	
	pokemonOwned.attackMonsterWithDps(monster, pokemon)
	checkIfMonsterIsDead(player, monster)
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
	}

});



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



$("#monster-display")
.on("click", function(){

})