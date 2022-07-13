// monster class
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

// player class 
class Player {
	constructor(name, attack) {
		this.name = name;
		this.attack = attack;
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

	getHealth() {
		return this.health
	}
}




// create player

var player = new Player("taigza", 1)
var playernameId = document.getElementById('playername')
playernameId.innerHTML = player.getName()

// and monster 
var newMonster = new Monster(10, 'Psykokwak')
var getMonsterHealthId = document.getElementById('monsterHealth')
getMonsterHealthId.innerHTML = newMonster.getHealth()

console.log(player.getName() + ' has ' + player.attack + ' attack' + ' and ' + newMonster.getName() + ' is alive with '  +  newMonster.getHealth() + ' health')

setDpc() // set dpc to player attack



var getMonsterHealth = newMonster.getHealth()

changeBarColorByHealthPourcentage(getMonsterHealth)


// click event for player attack
function monsterOnClick() {

	if (getMonsterHealth > player.attack) {
		getMonsterHealth = getMonsterHealth - player.attack
		newMonster.setHealth(getMonsterHealth)
		console.log(newMonster.getName() + ' is alive with ' + getMonsterHealth + ' health')
		
	} else {
	
		console.log('You killed the monster!');
		newMonster.setHealth(10)
		getMonsterHealth = newMonster.getHealth()


    }
	getMonsterHealthId.innerHTML = getMonsterHealth
	changeBarColorByHealthPourcentage(getMonsterHealth)

}



// change bar color by health pourcentage
function changeBarColorByHealthPourcentage(health) {
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



console.log(player.attack);

// TODO: add dps from characters y
function setDps() {
	var dps = document.getElementById('dps')
	dps.innerHTML = player.attack
}



function setDpc() {
	var dpc = document.getElementById('dpc')
	dpc.innerHTML = "Dpc = " + player.attack
}



// export json file with player and monster data 
function exportJson(el) {
	var obj = {
		name: player.getName(),
		player_attack: player.attack,
		monster_health: newMonster.getHealth()
	};
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
	el.setAttribute("href", "data:" + data);
	el.setAttribute("download", "data.json");
}


// import json file with player and monster data 
function importJson(el) {
	var file = el.files[0];
	if (file) { 
		var reader = new FileReader();
		reader.onload = function(e) {
			var contents = e.target.result;
			var json = JSON.parse(contents);
			console.log(json);
			setDataFromJson(json)
		}
		reader.readAsText(file);
	} else {
		alert("Failed to load file");
	}
}


// set data from json file with player and monster data
function setDataFromJson(json) {
	player.setName(json.name)
	player.setAttack(json.player_attack)
	newMonster.setHealth(json.monster_health)
	getMonsterHealthId.innerHTML = newMonster.getHealth()
}


