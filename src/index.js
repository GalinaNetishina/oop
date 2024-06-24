import { Character } from "./Character.js";
import Team from "./Team.js";

const characters = [
    new Character('bob', 'Bowman'), 
    new Character('Sam', "Swordsman"), 
    new Character('Mike', 'Magician')
]
const myTeam = new Team();
myTeam.addAll(...characters);

for (let {character, i} of myTeam) {
    console.assert(character===characters[i]);
}


