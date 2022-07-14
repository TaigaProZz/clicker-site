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




// create player 
var localStorageName = localStorage.getItem('playername')
var localStorageAttack = parseInt(localStorage.getItem('attack'))
var localStorageBank = parseInt(localStorage.getItem('bank'))

if (localStorageName == null){
	localStorageName =  prompt('Enter your name')
	localStorage.setItem('playername', localStorageName)
	localStorageAttack = 1
	localStorage.setItem('attack', localStorageAttack)
	localStorageBank = 0
	localStorage.setItem('bank', localStorageBank)

}

var player = new Player(localStorageName, localStorageAttack, localStorageBank)


var playernameId = document.getElementById('playername')
var bankId = document.getElementById('bank-box-text')

var getBank = player.getBank()

console.log(getBank);
playernameId.innerHTML = player.getName()
bankId.innerHTML = getBank + ' $'



// and monster 
var newMonster = new Monster(10, 'Psykokwak')
var getMonsterHealthId = document.getElementById('monsterHealth')
const getMonsterHealthBase = newMonster.getHealth()

getMonsterHealthId.innerHTML = newMonster.getHealth() + ' / '  + getMonsterHealthBase + ' hp'

console.log(getMonsterHealthBase);
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
	
		console.log('You killed ' + newMonster.getName() + '! You earned ' + getBank + ' + 1$')
		newMonster.setHealth(10)
		getMonsterHealth = newMonster.getHealth()


		getBank = getBank + 1
		bankId.innerHTML = getBank + ' $'
		saveLocalStorage()
    }
	getMonsterHealthId.innerHTML = getMonsterHealth + ' / '  + getMonsterHealthBase + ' hp'
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


// TODO: add dps from characters y
function setDps() {
	//var dps = document.getElementById('dps')
	//dps.innerHTML = character.attack
}

function setDpc() {
	var dpc = document.getElementById('dpc')
	dpc.innerHTML = "Dpc = " + player.attack
}






/////// SAVE DATA ///////

function saveLocalStorage() {
	localStorage.setItem('playername', player.getName())
	localStorage.setItem('attack', player.getAttack())
	localStorage.setItem('bank', getBank)

}


// export json file with player and monster data 
function exportJson(el) {
	var obj = {
		name: player.getName(),
		playerattack: player.attack,
		bank: getBank
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
	playernameId.innerHTML = player.getName()
	localStorage.setItem('playername', player.getName())

	player.setAttack(json.player_attack)
	setDpc()
	localStorage.setItem('attack', player.getAttack())

	parseInt(player.setBank(json.bank))
	bankId.innerHTML = player.getBank() + ' $'
	localStorage.setItem('bank', player.getBank())
}


function applyCursorRippleEffect(e) {
	const ripple = document.createElement("div");
 
	ripple.className = "ripple";
	document.body.appendChild(ripple);
 
   ripple.style.left = `${e.clientX}px`;
   ripple.style.top = `${e.clientY}px`; 
 
	ripple.style.animation = "ripple-effect .4s  linear";
	ripple.onanimationend = () => document.body.removeChild(ripple);
 
 }