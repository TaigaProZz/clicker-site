export default class Player {
	#name = '';
	#attack = 0;
	#clickLvl = 1;
	#bank = 0;

	constructor() {
		this.#name = localStorage.getItem('playername') ? localStorage.getItem('playername') : prompt('Enter your name');
		this.#attack = localStorage.getItem('attack') ? parseInt(localStorage.getItem('attack')) : 1;
		this.#bank = localStorage.getItem('bank') ? parseInt(localStorage.getItem('bank')) : 0;
		this.#clickLvl = localStorage.getItem('clickLvl') ? parseInt(localStorage.getItem('clickLvl')) : 1;
		this.updateLocalStorage();

		$('#playername').html(this.#name);
		$('#dpc').html(this.#attack + ' dpc');
		$('#pokemon-attack-click').html('Attaque par click '+ this.#attack).css('color', '#00ff00');
		$('#bank-box-text').html(this.#bank + ' $');
		//TODO clicklvl
		$('')
	}

	getName() {
		return this.#name;
	}

	getAttack() {
		return this.#attack;
	}

	getBank () {
		return this.#bank ;
	}

	setName(name) {
		this.#name = name;
		$('#playername').html(name);
		this.updateLocalStorage();
	}

	setAttack(attack) {
		this.#attack = attack;
		$('#dpc').html("Dpc = " + attack);
		this.updateLocalStorage();
	}
	
	setBank(bank) {
		this.#bank = bank;
		this.updateLocalStorageBank(bank);
		$('#bank-box-text').html(this.#bank + ' $');

	}

	updateLocalStorage() {
		console.log('updateLocalStorage');
		localStorage.setItem('playername', this.#name);
		localStorage.setItem('attack', this.#attack);
		localStorage.setItem('bank', this.#bank);
	}

	updateLocalStorageBank(bank) {
		localStorage.setItem('bank', bank);
	}
}
