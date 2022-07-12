class Monster {
	constructor(health, name) {
		this.health = health;
		this.name = name;
	}

	getName() {
		return this.name
	}

	setHealth(hp) {
		this.health = hp
	}

	getHealth() {
		return this.health
	}
}



var newMonster = new Monster(10, 'Psykokwak')
console.log(newMonster.getName())

var getMonsterHealthId = document.getElementById('monsterHealth')
getMonsterHealthId.innerHTML = newMonster.getHealth()



function monsterOnClick() {
	var getMonsterHealth = newMonster.getHealth()

	if (getMonsterHealth > 1) {
		getMonsterHealth = getMonsterHealth - 1
		newMonster.setHealth(getMonsterHealth)


	} else {
		console.log('You killed the monster!');
		newMonster.setHealth(10)
		getMonsterHealth = newMonster.getHealth()
		

    }
	getMonsterHealthId.innerHTML = getMonsterHealth


}

function createMonster() {
	var newMonster = new Monster(10, 'Psykokwak')
}

