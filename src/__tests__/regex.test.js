
import Validator from "../Validator";

const validNames = ['username', 'right_name', 'any-name', 'ihave100names'];
const invalidNames = ['_username', 'AlmostG0000D', '2account', 'user25', '-username', 'username_', 'username-'];
const validator = new Validator();

test.each(
    validNames.map((element) => [element])
)
('valid usernames, %s', (name) => {
    expect(validator.isValidName(name)).toBe(true);
})

test.each(
    invalidNames.map((element) => [element])
)
('invalid usernames, %s', (name) => {
    expect(validator.isValidName(name)).toBe(false);
})