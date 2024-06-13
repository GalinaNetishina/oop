import userSettings from '../Settings';

const defaultValues = {
    theme: 'dark', 
    music: 'trance', 
    difficulty: 'easy'
};

afterEach(()=>userSettings.reset());

describe("test settings", () => {
    it('Uncorrect option do not apply', () => {
        userSettings.set('sound', 'off');
        expect(userSettings.settings).toEqual(new Map(Object.entries(defaultValues)));
    })

    it.each([
        ['music', ['off', 'chillout', 'rock', 'pop']],
        ['theme', ['light', 'gray']],
        ['difficulty', ['normal', 'hard', 'nightmare']]
    ])('for %s, values %s are available', (option, values)=>{
        for (let value of values) {
            userSettings.set(option, value);
            expect(userSettings.settings.get(option)).toBe(value);
        }
    })
    it.each(Object.entries(defaultValues))
    ('default settings for %s = %s', (option, value) => {        
        expect(userSettings.settings.get(option)).toBe(value);
    })    
})