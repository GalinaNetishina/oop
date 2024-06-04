import {readFileSync as rf}  from 'fs'
import * as ini from 'ini'

export const config = ini.parse(rf('./config.ini', 'utf-8'));
export const types =Object.keys(config.types);
export const minNameLength = config.minNameLength || 2;
export const maxNameLength = config.maxNameLength || 10;

export default class Character {
  static MIN_NAME_LENGHT = config.minNameLength || 2;
  constructor(name, type){
    if (!(types.includes(type))) {
      throw new Error("Unknown type");
    }
    if (name.length < minNameLength || name.length > maxNameLength) {
      throw new Error("Uncorrect length of name");
    }
    this.name = name;
    this.type = type;
    this.health = parseInt(config.baseHealth) || 100;
    this.level = parseInt(config.baseLevel) || 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Character is dead, level up is impossible");
    }
    ++this.level;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = parseInt(config.baseHealth) || 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}
