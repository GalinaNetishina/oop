const numberFormatter = (_, code, ...matches) => {
    let result = '';
    if (code=='8') {
        result += '+7';
    } else {
        result+=code;
    }
    for (let group of matches) {
        result+=group;
    }
    return result;
}

export default function formatNumber(number) {
    const numberPattern = /(8|\+\d{1,2})[/(-]?(\d{3})[/)-]?\s*(\d{3})-?\s*(\d{2})-?\s*(\d{2})$/;
    number = number.replace(' ', '');
    if (!numberPattern.test(number)) {
        throw new Error('uncorrect format of number');
        }
    return numberFormatter(...numberPattern.exec(number));    
    }
    



