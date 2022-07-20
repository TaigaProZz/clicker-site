export default class Character {
    #name = '';
    #attack = 0;
    #level = 1;
    #price = 0;
	#priceLevelUp = [0, 10, 20, 30];
	#image = '';
	#visible = '';

	constructor(name, attack, level, price, priceLevelUp, image, visible) {
		this.#name = name;
		this.#attack = attack;
		this.#level = level;
		this.#price = price;
		this.#priceLevelUp = priceLevelUp;
		this.#image = image;
		this.#visible = visible;
        // document.getElementById('dps').innerHTML = "Dps = " + this.#attack;
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

	setAttack(attack) {
		this.#attack = attack;
	}
	setLevel(level) {
		this.#level = level;
	}
	setPrice(price) {
		this.#price = price;
	}
}