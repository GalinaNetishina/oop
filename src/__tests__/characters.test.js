import { Character, types, minNameLength, maxNameLength } from "../Character";
import { Swordsman } from "../Swordsman";
import { Bowman } from "../Bowman";
import { Magician } from "../Magician";
import { Undead } from "../Undead";
import { Zombie } from "../Zombie";
import { Daemon } from "../Daemon";

const units = {
  Swordsman: Swordsman,
  Bowman: Bowman,
  Magician: Magician,
  Undead: Undead,
  Zombie: Zombie,
  Daemon: Daemon,
};

describe("basic test", () => {
  it("create object", () => {
    const testBody = new Swordsman("evil");
    expect(testBody).toEqual({
      name: "evil",
      type: "Swordsman",
      level: 1,
      health: 100,
      attack: 10,
      defence: 40,
    });
  });

  it.each(Object.keys(units).map((element) => [element]))(
    "baseHealth and level for %s",
    (unit) => {
      let testBody = new units[unit]("name");
      expect(testBody.health).toBe(100);
      expect(testBody.level).toBe(1);
    }
  );
});

describe("expected errors", () => {
  it("uncorrect name", () => {
    const getName = function (length) {
      new Bowman("w".repeat(length));
    };
    expect(() => getName(minNameLength - 1)).toThrow(
      "Uncorrect length of name"
    );
    expect(() => getName(maxNameLength + 1)).toThrow(
      "Uncorrect length of name"
    );
    expect(() => getName(maxNameLength - 1)).not.toThrow(
      "Uncorrect length of name"
    );
  });

  it("uncorrect type", () => {
    expect(() => new Character("name", "paladin")).toThrow("Unknown type");
  });

  it("unsuccess levelUp", () => {
    const dyingUnit = new Zombie("bill");
    dyingUnit.damage(300);
    expect(() => dyingUnit.levelUp()).toThrow();
  });
});
describe('methods of characters', () => {
    it('success levelUp', () => {
        const testBody = new Swordsman('tester');
        const attackOld = testBody.attack;
        const defenceOld = testBody.defence;
        testBody.levelUp();
        expect(testBody.level).toBe(2);
        expect(testBody.attack).toBe(Math.round(attackOld*120/100));
        expect(testBody.defence).toBe(Math.round(defenceOld*120/100));
    })
    
    it('damage and healing', () => {
        const testBody = new Undead('he');
        testBody.damage(5);
        expect(testBody.health).toBeLessThan(100);
        testBody.levelUp();
        expect(testBody.health).toBe(100);
    })
    
    it.each([
        ['Bowman', 25],
        ['Swordsman', 10],
        ['Zombie', 10],
        ['Undead', 25],
    ])
    ('get attack for %s = %i', (unit, expectedAttack) => {
        let character = new units[unit]('name')
        expect(character.getAttack()).toBe(expectedAttack)
    })
})
