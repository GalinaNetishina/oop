
import Validator from "../Validator";

const validNames = ['nick', 'user23here', 'any_name', 'i_am_99_Years-old'];
const invalidNames = ['_username', 'AlmostG000D', '2account', 'user25'];
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