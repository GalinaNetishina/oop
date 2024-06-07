import orderByProps from "../orderByProps";

test.bef
test.each([
    [['name', 'level']],
    [['health', 'level', 'attack']],
    [['defence']],
])
('ordering properties', (props) => {
    const testBody = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const result = orderByProps(testBody, props);
    props.forEach((prop, i) => {
        expect(result[i].key).toBe(prop);
    })
})

test('data remains correct', () => {
    const testBody = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const result = orderByProps(testBody, ['attack', 'level']);
    expect(result.length).toBe(Object.keys(testBody).length);
    expect(result.every((resItem)=>{
        return testBody[resItem.key]==resItem.value;
    })).toBeTruthy();
})

test('alphabet order', () => {
    const testBody = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const result = orderByProps(testBody, []);
    const expectedKeys = Object.keys(testBody);
    expectedKeys.sort();
    expect(result.every((item, i) => {return item.key==expectedKeys[i]})).toBeTruthy();
})

test('uncorrect props are ignored', () => {
    const testBody = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const goodTrying = orderByProps(testBody, ['name']);
    const badTrying = orderByProps(testBody, ['name', 'badKey']);
    expect(goodTrying).toEqual(badTrying);
})