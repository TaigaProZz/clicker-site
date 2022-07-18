export default class Player {
	#name = '';
	#attack = 0;
	#bank = 0;

	constructor() {
		this.#name = localStorage.getItem('playername') ? localStorage.getItem('playername') : prompt('Enter your name');
		this.#attack = localStorage.getItem('attack') ? parseInt(localStorage.getItem('attack')) : 1;
		this.#bank = localStorage.getItem('bank') ? parseInt(localStorage.getItem('bank')) : 0;
		
		document.getElementById('playername').innerHTML = this.#name;
		document.getElementById('dpc').innerHTML = "Dpc = " + this.#attack;
		document.getElementById('bank-box-text').innerHTML = this.#bank + ' $';
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
		document.getElementById('playername').innerHTML = name;
		this.updateLocalStorage();
	}

	setAttack(attack) {
		this.#attack = attack;
		document.getElementById('dpc').innerHTML = "Dpc = " + attack;
		this.updateLocalStorage();
	}
	
	setBank(bank) {
		this.#bank = bank;
		document.getElementById('bank-box-text').innerHTML = bank + ' $';
		this.updateLocalStorage();
	}

	updateLocalStorage() {
		localStorage.setItem('playername', this.#name);
		localStorage.setItem('attack', this.#attack);
		localStorage.setItem('bank', this.#bank);
	}
}