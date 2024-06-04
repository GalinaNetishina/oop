import {Character, types, minNameLength, maxNameLength} from "../Character";
import {Swordsman} from "../Swordsman";
import {Bowman} from "../Bowman";
import {Magician} from "../Magician";
import {Undead} from "../Undead";
import {Zombie} from "../Zombie";
import {Daemon} from "../Daemon";

const units = {
    "Swordsman": Swordsman, 
    "Bowman": Bowman, 
    "Magician": Magician, 
    "Undead": Undead, 
    "Zombie": Zombie, 
    "Daemon": Daemon,
}

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

test.each(
    Object.keys(units).map((element) => [element])
)
('baseHealth and level for %s', (unit) => {
    let testBody = new units[unit]('name');
    expect(testBody.health).toBe(100);
    expect(testBody.level).toBe(1);
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
    expect(()=> new Character('name', 'paladin')).toThrow("Unknown type");
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
