export default class Character {
    #name = '';
    #attack = 0;
    #level = 1;
    #price = 0;

	constructor(name, attack, level, price) {
		this.#name = name;
		this.#attack = attack;
		this.#level = level;
		this.#price = price;

        document.getElementById('dps').innerHTML = "Dps = " + this.#attack;
	}

	getName() {
		return this.#name
	}
	getAttack() {
		return this.#attack
	}

	setAttack(attack) {
		this.#attack = attack
	}

	getLevel() {
		return this.#level
	}

	setLevel(level) {
		this.#level = level
	}

	
	getPrice() {
		return this.#price
	}

	setPrice(price) {
		this.#price = price
	}
}