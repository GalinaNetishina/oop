import {Character} from "./Character.js"

export class Magician extends Character {
    constructor(name) {
        super(name, "Magician");
        this.defence = 10;
        this.attack = 40;
        this.stoned = false;
    }
    set stoned(isStoned) {
        this._stoned = isStoned
    }
    get stoned(){
        return this._stoned
    }
    getAttack(distance){
        this.attack = Math.round((1 - 0.1*(distance-1)) *this.attack);
        if (this.stoned) {
            this.attack -=  (Math.log2(distance) * 5);
        }
        return Math.round(this.attack);
    }
    }



