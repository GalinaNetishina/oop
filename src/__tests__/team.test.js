import Team from "../Team";
import { Character } from "../Character";
import Er from "../ErrorRepository";

const testCharacters = [
    new Character('bob', 'Bowman'),
    new Character('abob', 'Swordsman'),
    new Character('bib', 'Magician')
]

describe("test of Team.add", () => {
    it('add one character', () => {
        const team = new Team();
        team.add(testCharacters[0]);
        expect(team.members.has(testCharacters[0])).toBe(true);
        expect(team.members.size).toBe(1);
    })
    it('try add the same character again', () => {
        const team = new Team();
        team.add(testCharacters[0]);
        expect(()=>team.add(testCharacters[0])).toThrow('this character is already in the team');
    })
})

describe("test of Team.addAll", () => {   
    it('add several characters', () => {
        const team = new Team();
        team.addAll(...testCharacters);
        expect(team.members.size).toBe(testCharacters.length);
        expect(testCharacters.every((character)=>team.members.has(character))).toBe(true);
    })
    it('add same characters again, without dublicate and errors', () => {
        const team = new Team();
        team.addAll(...testCharacters, testCharacters[1]);
        expect(team.members.size).toBe(testCharacters.length);
        expect(testCharacters.every((character)=>team.members.has(character))).toBe(true);
    })
})

describe("test of  Team.toArray", () => {
    it('convert to Array', () => {
        const team = new Team();
        team.addAll(...testCharacters);
        const result = team.toArray();
        expect(result).toEqual(testCharacters);
    })
})
describe("test Error repo", () => {
    it.each([
        [1, 'invalid username'],
        [18, 'this character is already in the team'],
        [20, 'Uncorrect type'],
        [11, 'Uncorrect length of name'],
        [19, 'Character is dead, level up is impossible']
    ])('code - %i, return %s', (code, expected)=>{
        expect(Er.translate(code)).toBe(expected);
    })
    it('Unknown error', () => {
        expect(Er.translate(200)).toBe('Unknown Error');
    })
})