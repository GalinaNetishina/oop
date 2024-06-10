export default class Validator {
    constructor(){
        this.isValidName = this.validateUsername;
        
    }
    validateUsername(username) {
        const allowedName = /^[a-zA-Z]{1}[\da-zA-Z\-_]*[a-zA-Z]{1}$/;
        const ban = /\d{3,}/;
        return  (allowedName.test(username) && !(ban.test(username)));        
    }
}


