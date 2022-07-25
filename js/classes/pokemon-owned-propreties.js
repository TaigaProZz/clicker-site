import PokemonOwnedClass from './pokemon-owned-constructor.js';

export default class PokemonOwned {

    #pokemonsList = [];


    constructor() {
        this.#pokemonsList =[
            new PokemonOwnedClass('Grukui', 5, 1, 10, [0, 10, 20, 30], '../img/grukui.png', true,  false),
            new PokemonOwnedClass('Krabby', 15, 1, 100, [0, 10, 20, 30], '../img/krabby.png', true,  false),
            new PokemonOwnedClass('Machoc', 40, 1, 500, [0, 10, 20, 30], '../img/machoc.png', true,  false),
            new PokemonOwnedClass('Ponyta', 100, 1, 1000, [0, 10, 20, 30], '../img/ponyta.png', true,  false),
            new PokemonOwnedClass('Pikachu', 200, 1, 2000, [0, 10, 20, 30], '../img/pikachu.png', true,  false)
            
        ]

        this.savePokemons();
    }

    savePokemons() {
      
     //   this.#pokemonsList.forEach((pokemon, index) => {
     //      localStorage.setItem("pokemonOwned", JSON.stringify(pokemon));
     //  });
     //  

     }

    display(player) {
        $(document).ready(() => {
            let display = 'block';
            var totalDps = localStorage.getItem('pokemonOwnedDps') ? parseInt(localStorage.getItem('pokemonOwnedDps')) : 0;
        
            // create a div for each pokemon
            this.#pokemonsList.forEach((pokemon, index) => {
                display = pokemon.getVisible() ? 'block' : 'none';
                $('#pokemons-list').append(
                    '<div class="pokemon-box" style="display:'+ display +'">' +
                        '<div class="pokemon-name unselectable">' +
                            '<span>' + pokemon.getName() + '</span>' +
                        '</div>' +
                        '<div class="pokemon-attack unselectable">' +
                            '<span style="color:yellow" id="pokemon-attack-'+pokemon.getName()+'" >Attaque ' + pokemon.getAttack() + '</span>' +
                        '</div>' +
                        '<div class="pokemon-level unselectable">' +
                        '<span id="pokemon-level-'+pokemon.getName()+'">Niveau ' + pokemon.getLevel() + '</span>' +
                    '</div>' +
                        '<div class="pokemon-img-parent unselectable">' +
                            '<img class="pokemon-img" src="' + pokemon.getImage() + '">' +
                        '</div>' +
                        
                        '<button id="pokemon-buy-btn-'+pokemon.getName()+'" class="pokemon-buy-btn center">Acheter <br>'+ pokemon.getPrice()+'</button>' + 
                        '<button id="pokemon-lvl-up-btn-'+pokemon.getName()+'" class="pokemon-lvl-up-btn" style="display:none">Up</button>' + 
                    '</div>'
                );
                lvlUp(pokemon, totalDps);
                buy(pokemon, player, totalDps);  

            })
        });
        
        
        function lvlUp(pokemon, totalDps)  {
            // if the pokemon is bought, hide the buy button and show the lvl up button
            if (pokemon.getBought() == true) {
                $('#pokemon-buy-btn-' + pokemon.getName()).css("visibility", "hidden");
                $('#pokemon-lvl-up-btn-' + pokemon.getName()).css("display", "block");
                console.log(pokemon.getAttack())
                totalDps = totalDps + pokemon.getAttack(); 
                pokemon.setTotalDps(totalDps);
                localStorage.setItem('pokemonOwnedDps', pokemon.getTotalDps())        
            }
        }
  
        // buy the pokemon if the player has enough money
        function buy(pokemon, player, totalDps) {
           // if the pokemon is not bought, hide the lvl up button and show the buy button
           $('#pokemon-buy-btn-' + pokemon.getName()).click(() => {
                var playerBank = player.getBank();
                // check if player has enough money
                if (playerBank >= pokemon.getPrice()) {
                    playerBank = playerBank - pokemon.getPrice();
                    player.setBank(playerBank);
                
                    pokemon.setBought(true);   
                    totalDps = totalDps + pokemon.getAttack(); 
                    pokemon.setTotalDps(totalDps);
                    
                    player.updateLocalStorageBank(playerBank);
                    parseInt(localStorage.setItem('pokemonOwnedDps', pokemon.getTotalDps())); 


                    console.log(pokemon.getTotalDps());
                    $('#pokemon-buy-btn-' + pokemon.getName()).css("visibility", "hidden");
                    $('#pokemon-lvl-up-btn-' + pokemon.getName()).css("display", "block");
                } else {
                    // if player doesn't have enough money, display a message
                    $('#liveToast').toast('show'); 
                    }  
            });            
        } 
    }

        // attack the monster with pokemon's attack dps
        attackMonsterWithDps (monster, pokemon) { 
            var monsterHealth = monster.getHealth();
            var pokemonDps = pokemon.getTotalDps();
            monsterHealth = monsterHealth - pokemonDps;
            monster.setHealth(monsterHealth);

        }  


       
            

}
