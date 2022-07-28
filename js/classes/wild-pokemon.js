export default class WildPokemon {
   
    #name = '';
    #initialHealth = 0;
    #health = 0;
    #pokemonImg = '';
   

	constructor(name, health, pokemonImg) {
        this.#name = name;
        this.#initialHealth = health;
		this.#health = health;
        this.#pokemonImg = pokemonImg;
        this.refreshInfos();
	}

	getName() {
		return this.#name
	}

	setHealth(hp) {
		this.#health = hp;
        this.refreshInfos();
	}

	getHealth() {
		return this.#health
	}


    // Display the health bar and set color bar by pourcentage
    refreshInfos() {
        $('#wildPokemonHealth').html(this.#health + ' / ' + this.#initialHealth + ' hp');
            // Display the image of the monster

        $('#wildPokemonImg').attr('src', this.#pokemonImg);
        $('#wildPokemonName').html(this.#name);
        this.changeBarColorByHealthPourcentage(this.#health);
    }

  

    // ftn to reset the health of the monster
    resetHealth() {
		this.#health = this.#initialHealth;
        this.refreshInfos();
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
