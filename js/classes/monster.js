export default class Monster {
	constructor(health, name) {
        this.initialHealth = health;
		this.health = health;
		this.name = name;
        
        this.displayHealth();
	}


	getName() {
		return this.name
	}

	setHealth(hp) {
		this.health = hp;
        this.displayHealth();
	}

	getHealth() {
		return this.health
	}

    displayHealth() {
        $('#monsterHealth').html(this.health + ' / '  + this.initialHealth + ' hp');
        this.changeBarColorByHealthPourcentage(this.health);
    }

    resetHealth() {
		this.health = this.initialHealth;
        this.displayHealth();
	}

    changeBarColorByHealthPourcentage(health) {
        var barcolor = $('#bosshealth-bar')
        var healthpourcentage = health / 10 * 100
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
