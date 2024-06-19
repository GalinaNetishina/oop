import {Character} from "./Character.js"

export class Magician extends Character {
    #stoned  = false
    constructor(name) {
        super(name, "Magician");
        this.defence = 10;
        this.attack = 40
    }
    set stoned(isStoned) {
        this.#stoned = isStoned
    }
    get stoned(){
        return this.#stoned
    }
    getAttack(distance){
        this.attack = Math.round((1 - 0.1*(distance-1)) *this.attack);
        if (this.stoned) {
            this.attack -=  (Math.log2(distance) * 5);
        }
        return Math.round(this.attack);
    }
    }



