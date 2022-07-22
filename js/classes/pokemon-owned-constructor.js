export default class PokemonOwnedClass {
    #name = '';
    #attack = 2;
    #level = 1;
    #price = 0;
	#priceLevelUp = [0, 10, 20, 30];
	#image = '';
	#visible = '';
	#bought = false;
	#totalDps = 0;

	constructor(name, attack, level, price, priceLevelUp, image, visible, bought, totalDps) {
		this.#name = name;
		this.#attack = attack;
		this.#level = level;
		this.#price = price;
		this.#priceLevelUp = priceLevelUp;
		this.#image = image;
		this.#visible = visible;
		this.#bought = bought;
		this.#totalDps = localStorage.getItem('pokemonOwnedDps') ? parseInt(localStorage.getItem('pokemonOwnedDps')) : 0;


		$('#dps').html(this.#totalDps + ' dps');
	
		
	}

	getName() {
		return this.#name;
	}
	getAttack() {
		return this.#attack;
	}
	getLevel() {
		return this.#level;
	}
	getPrice() {
		return this.#price;
	}
	getPriceLevelUp() {
		return this.#priceLevelUp[this.#level-1];
	}
	getImage() {
		return this.#image;
	}
	getVisible() {
		return this.#visible;
	}

	getBought () {
		return this.#bought;
	}

	getTotalDps() {
		return this.#totalDps;

	}
	

	setAttack(attack) {
		this.#attack = attack;
	}
	setLevel(level) {
		this.#level = level;
	}
	setPrice(price) {
		this.#price = price;
	}

	setBought(bought) {
		this.#bought = bought;
	}

	setTotalDps(totalDps) {
		this.#totalDps = totalDps;
		$('#dps').html(totalDps + ' dps');

	}


	// updateLocalStoragePokemon() {
	// 	localStorage.setItem('playername', this.#name);
	// 	localStorage.setItem('attack', this.#attack);
	// 	localStorage.setItem('bank', this.#bank);
	// }



}