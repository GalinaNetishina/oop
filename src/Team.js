export default class Team {
    constructor() {
        this.members = new Set
        }

    *[Symbol.iterator]() {
        yield * this.members;
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('The character is already in the team');
        }
        this.members.add(character);
    }
    addAll(...characters) {
        for (let character of characters) {
            this.members.add(character);
        }
    }
    toArray() {
        return Array.from(this.members);
    }
    
}

