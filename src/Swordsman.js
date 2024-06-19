import {Character} from "./Character.js"

export class Swordsman extends Character {
    constructor(name) {
        super(name, "Swordsman");
        this.attack = 10;
        this.defence = 40;
    }
}
