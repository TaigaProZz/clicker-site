import Character from './character.js';

export default class Characters {

    #charactersList = [];

    constructor() {
        this.#charactersList = [
            new Character('Grukui', 20, 1, 1000, [0, 10, 20, 30], '../img/grukui.png', true),
            new Character('Ponchiot', 30, 1, 2000, [0, 10, 20, 30], '../img/ponchiot.png', true),
            new Character('Flo', 40, 1, 3000, [0, 10, 20, 30], '../img/grukui.png', true),
            new Character('Paul', 50, 1, 4000, [0, 10, 20, 30], '../img/ponchiot.png', false),
        ]
    }

    display() {
        $(document).ready(() => {
            let display = 'block';
            this.#charactersList.forEach((char, index) => {
                display = char.getVisible() ? 'block' : 'none';
                $('#characters-list').append(
                    '<div class="character-box" style="display:'+ display +'">' +
                        '<div class="character-name">' +
                            '<span id="character1name">' + char.getName() + '</span>' +
                        '</div>' +
                        '<div class="character-attack center">' +
                            '<span id="character1attack">Attaque: ' + char.getAttack() + '</span>' +
                        '</div>' +
                        '<div class="character-image">' +
                            '<img id="character1image" src="' + char.getImage() + '">' +
                        '</div>' +
                    '</div>'
                );
            })
        });
    }
}
