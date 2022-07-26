export default class Save {
    #player;

	constructor(player) {
		this.#player = player;

	}

   

    exportJson(){
        let obj = {
            name          : this.#player.getName(),
            player_attack : this.#player.getAttack(),
            bank          : this.#player.getBank()
        };
    
        var json = JSON.stringify(obj);
        var blob = new Blob([json], {type: "application/json"});
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "save.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
            
    }


    importJson(e){
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var json = e.target.result;
            var obj = JSON.parse(json);
            this.#player.setName(obj.name);
            this.#player.setAttack(obj.player_attack);
            this.#player.setBank(obj.bank);
            this.#player.updateLocalStorage();
           
        }
        reader.readAsText(file);
    }

}

