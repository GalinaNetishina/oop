import Character from "./Character.js"

export class Magician extends Character {
    constructor(name) {
        super(name, "Magician");
        this.atack = 10;
        this.defence = 40;
    }
}
