import { Character } from "./Character.js";
import Team from "./Team.js";
import canIterate from "./canIterate.js";

const characters = [
    new Character('bob', 'Bowman'), 
    new Character('Sam', "Swordsman"), 
    new Character('Mike', 'Magician')
]
const myTeam = new Team();

myTeam.addAll(...characters);

console.assert([...myTeam].every((item)=> {return characters.includes(item)})
        && characters.every((item)=> {return [...myTeam].includes(item)})
        ==true);


