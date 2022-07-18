// player class 
export class Player {
	constructor(name, attack, bank) {
		this.name = name;
		this.attack = attack;
		this.bank = bank;
	}

	getName() {
		return this.name
	}

	setName(name) {
		this.name = name
	}

	setAttack(attack) {
		this.attack = attack
	}
	
	getAttack() {
		return this.attack
	}

	setBank(bank) {
		this.bank = bank
	}

	getBank () {
		return this.bank 
	}

}