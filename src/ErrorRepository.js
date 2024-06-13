class ErrorRepository {
    constructor() {
        this.errors = new Map(Object.entries({
            1: 'Invalid username',
            18: 'This character is already in the team',
            20: 'Uncorrect type',
            11: 'Uncorrect length of name',
            19: 'Character is dead, level up is impossible'
        }))
    }
    translate(code) {
        const errorMsg = this.errors.get(code.toString()) || 'Unknown Error';
        return errorMsg;
    }
}
const er = new ErrorRepository();
export default er;