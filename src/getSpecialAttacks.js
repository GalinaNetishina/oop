export default function getSpecialAttacks(character) {
    let result=[];
    const { special: specialAttacks } = character;
    for (let attack of specialAttacks) {
        const { id, name, icon, description = "Описание недоступно"} = attack;
        result.push({id, name, icon, description})
    }
    return result;
}


