import {Character} from "./Character.js"

export class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon");
        this.attack = 40;
        this.defence = 10;
    }
}
