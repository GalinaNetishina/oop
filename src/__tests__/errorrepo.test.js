import Er from "../ErrorRepository";

describe("test Error repo", () => {
    it.each([
        [1, 'Invalid username'],
        [18, 'This character is already in the team'],
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