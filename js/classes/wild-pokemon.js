export default class WildPokemon {

    #initialHealth = 0;
    #health = 0;
    #name = '';

	constructor(health, name) {
        this.#initialHealth = health;
		this.#health = health;
		this.#name = name;
        this.displayHealth();
	}

	getName() {
		return this.#name
	}

	setHealth(hp) {
		this.#health = hp;
        this.displayHealth();
	}

	getHealth() {
		return this.#health
	}

    // Display the health bar and set color bar by pourcentage
    displayHealth() {
        $('#wildPokemonHealth').html(this.#health + ' / ' + this.#initialHealth + ' hp');
        this.changeBarColorByHealthPourcentage(this.#health);
    }

    // ftn to reset the health of the monster
    resetHealth() {
		this.#health = this.#initialHealth;
        this.displayHealth();
	}

    // Change the color of the health bar by pourcentage
    changeBarColorByHealthPourcentage(health) {
        var barcolor = $('#wildPokemonHealth-bar')
        var healthpourcentage = health / this.#initialHealth * 100
        barcolor.css("width", healthpourcentage + '%');
    
        if (healthpourcentage > 99) {
            barcolor.css("backgroundColor", 'green');
        }
    
        if (healthpourcentage < 70) {
            barcolor.css("backgroundColor", 'orange');
        }
        
        if (healthpourcentage < 40) {
            barcolor.css("backgroundColor", 'yellow');
        }
    
        if (healthpourcentage < 20) {
            barcolor.css("backgroundColor", 'red');
        }
    }
}
