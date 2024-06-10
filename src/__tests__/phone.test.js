import formatNumber from "../formatNumber"


const validNumbers = ['8(900)300-98-75', '+86 000 000 0000', '+7 (927)0000000'];
const invalidNumbers = ['890087-55333', ]


test('valid numbers', () => {
    for (let number of validNumbers){
        const result = formatNumber(number);
        let digits = Array.from(number).filter((e)=>{
            return (e.charCodeAt(0)>=48 && e.charCodeAt()<=57)
        }).join('');
        if (number.startsWith('8')) {
            digits = digits.replace('8', '7', 1);
        }
        expect(result).toBe('+'+digits);
    }
})

test('invalid numbers', () => {
    for (let number of invalidNumbers) {
        expect(()=>formatNumber(number)).toThrow();
    }
})