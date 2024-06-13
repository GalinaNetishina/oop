class Settings{
    constructor() {
        this.options =  {
            theme: ['dark', 'light', 'gray'],
            music: ['pop', 'rock', 'chillout', 'off'],
            difficulty: ['easy', 'normal', 'hard', 'nightmare']
        }
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ])
        this.userSettings = new Map();
    }
    set(option, value) {
       if ((option in this.options) && (this.options[option].includes(value))) {
                    this.userSettings.set(option, value);
                } 
    }
    reset() {
        this.userSettings.clear();
    }
    get settings () {
        return new Map([...this.defaultSettings, ...this.userSettings]);
    } 
}

const settings = new Settings();
export default settings;
