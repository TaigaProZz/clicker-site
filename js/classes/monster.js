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
        document.getElementById('monsterHealth').innerHTML = this.health + ' / '  + this.initialHealth + ' hp';
        this.changeBarColorByHealthPourcentage(this.health);
    }

    resetHealth() {
		this.health = this.initialHealth;
        this.displayHealth();
	}

    changeBarColorByHealthPourcentage(health) {
        var barcolor = document.getElementById('bosshealth-bar')
        var healthpourcentage = health / 10 * 100
        barcolor.style.width = healthpourcentage + '%'
    
        if (healthpourcentage > 99) {
            barcolor.style.backgroundColor = 'green'
        }
    
        if (healthpourcentage < 70) {
            barcolor.style.backgroundColor = 'orange'
        }
        
        if (healthpourcentage < 40) {
            barcolor.style.backgroundColor = 'yellow'
        }
    
        if (healthpourcentage < 20) {
            barcolor.style.backgroundColor = 'red'
        }
    }
}
