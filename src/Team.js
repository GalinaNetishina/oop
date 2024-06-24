export default class Team {
    constructor() {
        this.members = new Set
        }

    [Symbol.iterator]() {
        const lastIndex = this.members.size;
        const members = this.toArray();
        let currentIndex = 0;
        return {next() {
            if (currentIndex < lastIndex){
                currentIndex++;
                return {value: members[currentIndex-1], done: false}
                
            } else return {value: members[lastIndex], done: true}
        }};
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

