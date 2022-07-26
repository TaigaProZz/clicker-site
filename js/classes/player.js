export default class Player {
	#name = '';
	#attack = 1;
	#clickLvl = 1;
	#bank = 0;

	constructor() {
		this.#name = localStorage.getItem('playername') ? localStorage.getItem('playername') : prompt('Enter your name');
		this.#attack = localStorage.getItem('attack') ? parseInt(localStorage.getItem('attack')) : 1;
		this.#bank = localStorage.getItem('bank') ? parseInt(localStorage.getItem('bank')) : 0;
		this.#clickLvl = localStorage.getItem('clickLvl') ? parseInt(localStorage.getItem('clickLvl')) : 1;
		this.updateLocalStorage();
		this.updateLocalStorageBank();

	


		$('#playername').html(this.#name);
		$('#dpc').html(this.#attack + ' dégats par clicks');
		$('#bank-box-text').html(this.#bank);
		$('#click-attack').html('Attaque ' + this.#attack).css('color', '#00ff00');
		$('#click-lvl').html('Niveau click ' + this.#clickLvl);
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

	getClickLvl() {
		return this.#clickLvl;
	}

	setName(name) {
		this.#name = name;
		$('#playername').html(name);
		this.updateLocalStorage();
	}

	setAttack(attack) {
		this.#attack = attack;
		$('#dpc').html(attack + ' dégats par clicks');
		this.updateLocalStorage();
	}

	setClickLvl(clickLvl) {
		this.#clickLvl = clickLvl;
		$('#click-lvl').html('Niveau click ' + clickLvl);
		this.updateLocalStorage();
	}
	
	setBank(bank) {
		this.#bank = bank;
		this.updateLocalStorageBank()
		$('#bank-box-text').html(this.#bank);

	}

	updateLocalStorage() {
		console.log('updateLocalStorage');
		localStorage.setItem('playername', this.#name);
		localStorage.setItem('attack', this.#attack);
		localStorage.setItem('bank', this.#bank);
	}

	updateLocalStorageBank() {
		localStorage.setItem('bank',  this.#bank);
	}
	
}

