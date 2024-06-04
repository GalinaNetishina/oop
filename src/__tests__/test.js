import {Character, config, types, minNameLength, maxNameLength} from "../Character";
import {Swordsman} from "../Swordsman";
import {Bowman} from "../Bowman";
import {Magician} from "../Magician";
import {Undead} from "../Undead";
import {Zombie} from "../Zombie";
import {Daemon} from "../Daemon";

const units = [
    Swordsman, 
    Bowman, 
    Magician, 
    Undead, 
    Zombie, 
    Daemon,
]

test('create object', ()=> {
    const testBody = new Daemon('evil');
    expect(testBody).toEqual({
        name: "evil", 
        type: "Daemon", 
        level:1, 
        health: 100, 
        attack: 10, 
        defence: 40
    });
})

test('baseHealth and level', () =>{
    for (let character of units) {
        let testBody =  new character('bob');
        expect(testBody.health).toBe(100);
        expect(testBody.level).toBe(1);
    }
})

test('uncorrect name', () => {
    const getName = function(length) {
        new Bowman('w'.repeat(length))
    }
    expect(() =>getName(minNameLength-1)).toThrow("Uncorrect length of name");
    expect(() =>getName(maxNameLength+1)).toThrow("Uncorrect length of name");
    expect(() =>getName(maxNameLength-1)).not.toThrow("Uncorrect length of name");
})

test('uncorrect type', () => {
    expect(() => new Character('name', 'paladin')).toThrow();
})

test('success levelUp', () => {
    const testBody = new Swordsman('tester');
    const attackOld = testBody.attack;
    const defenceOld = testBody.defence;
    testBody.levelUp();
    expect(testBody.level).toBe(2);
    expect(testBody.attack).toBe(Math.round(attackOld*120/100));
    expect(testBody.defence).toBe(Math.round(defenceOld*120/100));
})

test('damage and healing', () => {
    const testBody = new Undead('he');
    testBody.damage(5);
    expect(testBody.health).toBeLessThan(100);
    testBody.levelUp();
    expect(testBody.health).toBe(100);
})

test('unsuccess levelUp', () => {
    const dyingUnit = new Zombie('bill');
    dyingUnit.damage(300);
    expect(()=>dyingUnit.levelUp()).toThrow();
})

test('configuration', () => {
    expect(units.length).toBe(types.length);
    units.forEach((i)=>expect(types.includes(i)).toBeTruethy);
})
