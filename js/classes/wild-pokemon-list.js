import WildPokemon from "./wild-pokemon.js";

export default class WildPokemonList {
    #wildPokemonList = [];

    constructor() {
        this.#wildPokemonList = [  
        new WildPokemon("Ratentif", 10,'/img/wild-pokemon/Ratentif.png'),
        new WildPokemon("Chrysacier", 11, '/img/wild-pokemon/Chrysacier.png'),
      ];
    }

    addWildPokemon(wildPokemon) {
        this.#wildPokemonList.push(wildPokemon);
    }

    getWildPokemonList() {
        return this.#wildPokemonList;
    }
}
