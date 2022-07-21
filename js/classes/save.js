export default class Save {
    #player;

	constructor(player) {
		this.#player = player;
        
        $('#exportJSON').click(this.exportJson.bind(this));
        $('#importJSON').change(this.importJson.bind(this));
	}

    exportJson() {
        console.log("dzdzd");

        let obj = {
            name          : this.#player.getName(),
            player_attack : this.#player.getAttack(),
            bank          : this.#player.getBank()
        };
        let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
        $('#exportJSON').attr('href', 'data:' + data);
        $('#exportJSON').attr('download', 'data.json');
    }

    importJson() {
        var file = $('#importJSON').files[0];
        if (file) { 
            var reader = new FileReader();
            reader.onload = (e) => {
                var contents = e.target.result;
                var json = JSON.parse(contents);
                this.#player.setName(json.name);
                this.#player.setAttack(json.player_attack);
                this.#player.setBank(json.bank);
            }
            reader.readAsText(file);
        } else {
            alert("Failed to load file");
        }
    }
}