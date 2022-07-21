import Character from './character.js';

export default class Characters {

    #charactersList = [];

    constructor() {
        this.#charactersList = [
            new Character('Grukui', 5, 1, 10, [0, 10, 20, 30], '../img/grukui.png', true,  false),
            new Character('Krabby', 15, 1, 100, [0, 10, 20, 30], '../img/krabby.png', true,  false),
            new Character('Machoc', 40, 1, 500, [0, 10, 20, 30], '../img/machoc.png', true,  false),
            new Character('Ponyta', 100, 1, 1000, [0, 10, 20, 30], '../img/ponyta.png', true,  false),
        ]
    }

 
    
    display(player) {
        $(document).ready(() => {
            let display = 'block';
            var totalDps = localStorage.getItem('charDps') ? parseInt(localStorage.getItem('charDps')) : 0;
        
            
            // create a div for each character
            this.#charactersList.forEach((char, index) => {
                display = char.getVisible() ? 'block' : 'none';
                $('#characters-list').append(
                    '<div class="character-box" style="display:'+ display +'">' +
                        '<div class="character-name unselectable">' +
                            '<span class="charactername">' + char.getName() + '</span>' +
                        '</div>' +
                        '<div class="character-attack unselectable">' +
                            '<span id="character-attack-'+char.getName()+'" >Attaque: ' + char.getAttack() + '</span>' +
                        '</div>' +
                        '<div class="character-level unselectable">' +
                        '<span id="character-level-'+char.getName()+'">Niveau ' + char.getLevel() + '</span>' +
                    '</div>' +
                        '<div class="character-img-parent unselectable">' +
                            '<img class="character-img" src="' + char.getImage() + '">' +
                        '</div>' +
                        
                        '<button id="character-buy-btn-'+char.getName()+'" class="character-buy-btn center">Acheter <br>'+ char.getPrice()+'</button>' + 
                        '<button id="character-lvl-up-btn-'+char.getName()+'" class="character-lvl-up-btn" style="display:none">Up</button>' + 
                    '</div>'
                );

                lvlUp(char, totalDps);
                buy(char, player, totalDps);
              

            })
        });
        
        
        function lvlUp(char, totalDps)  {
            // if the character is bought, hide the buy button and show the lvl up button
            if (char.getBought() == true) {
                $('#character-buy-btn-' + char.getName()).css("visibility", "hidden");
                $('#character-lvl-up-btn-' + char.getName()).css("display", "block");
                console.log(char.getAttack())
                totalDps = totalDps + char.getAttack(); 
                char.setTotalDps(totalDps);
                localStorage.setItem('charDps', char.getTotalDps());
                
                
            }
     
        }
  
        function buy(char, player, totalDps) {
           // if the character is not bought, hide the lvl up button and show the buy button
           $('#character-buy-btn-' + char.getName()).click(() => {
            var playerBank = player.getBank();
            if (playerBank >= char.getPrice()) {
                playerBank = playerBank - char.getPrice();
                player.setBank(playerBank);
            
                char.setBought(true);   
                totalDps = totalDps + char.getAttack(); 
                char.setTotalDps(totalDps);
            
                player.updateLocalStorageBank(playerBank);
                parseInt(localStorage.setItem('charDps', char.getTotalDps()));

                $('#character-buy-btn-' + char.getName()).css("visibility", "hidden");
                $('#character-lvl-up-btn-' + char.getName()).css("display", "block");
            } else {
                 $('#liveToast').toast('show'); 
                }  
            });
        }

        

    }
    
    attackMonsterWithDps (monster, character) {
        
        var monsterHealth = monster.getHealth();
        var characterDps = character.getTotalDps();


            

    }
    
                

}
