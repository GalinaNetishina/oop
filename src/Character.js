export const types =  ['Bowman', 'Swordsman', 'Magician', 'Zombie', 'Undead', 'Daemon'];
export const minNameLength = 2;
export const maxNameLength = 10;
const baseHealth = 100;
const baseLevel = 1;

export class Character {
  constructor(name, type){
    if (!(types.includes(type))) {
      throw new Error("Unknown type");
    }
    if (name.length < minNameLength || name.length > maxNameLength) {
      throw new Error("Uncorrect length of name");
    }
    this.name = name;
    this.type = type;
    this.health = baseHealth;
    this.level = baseLevel;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Character is dead, level up is impossible");
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
