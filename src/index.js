import {Swordsman} from "./Swordsman.js"
import {Bowman} from "./Bowman.js"
import {Magician} from "./Magician.js"
import {Undead} from "./Undead.js"
import {Zombie} from "./Zombie.js"
import {Daemon} from "./Daemon.js"

exports = [Swordsman, Bowman, Magician, Undead, Zombie, Daemon]
let bowerman = new Bowman('bo');
// let swordsman = new Swordsman('art');
console.log(bowerman);
// bowerman.levelUp();
// bowerman.damage(15)
// swordsman.levelUp();
// swordsman.levelUp();
// console.log(bowerman, swordsman)
