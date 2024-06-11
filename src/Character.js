import Er from "./ErrorRepository";export const types =  {

  Bowman: {attack: 25, defence: 25},
  Swordsman: {attack: 40, defence: 10}, 
  Magician: {attack: 10, defence: 40}, 
  Zombie: {attack: 40, defence: 10}, 
  Undead: {attack: 25, defence: 25}, 
  Daemon:{attack: 10, defence: 40}
};
export const minNameLength = 2;
export const maxNameLength = 10;
const baseHealth = 100;
const baseLevel = 1;

export class Character {
  constructor(name, type){
    if (!(type in types)) {
      throw new Error(Er.translate(20));
    }
    if (name.length < minNameLength || name.length > maxNameLength) {
      throw new Error(Er.translate(11));
    }
    this.name = name;
    this.type = type;
    this.health = baseHealth;
    this.level = baseLevel;
    this.attack = types[type].attack;
    this.defence = types[type].defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error(Er.translate(19));
    }
    ++this.level;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = baseHealth;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}
