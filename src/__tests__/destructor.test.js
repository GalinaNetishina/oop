import getSpecialAttacks from "../getSpecialAttacks";

const testCharacters = [
    {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- описание "засекречено"
      }
    ]},
    {name: 'Мечник',
    type: 'Swordsman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
    special: [
          {
            id: 5,
            name: 'Двойной удар',
            icon: 'http://...'            
          }, 
          {
            id: 3,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Двойной удар наносит двойной урон'
          }
        ]	
    }]

test.each(
    testCharacters.map((element) =>[element.name, element])
)('all required fields received for %s' , (_, character)=>{
    const result = getSpecialAttacks(character);
    const fields = ['id', 'name', 'icon', 'description'];
    expect(result.every((attack)=>{
        return fields.every((prop) => {return prop in attack});
    })).toBeTruthy();
})

test.each(
    getSpecialAttacks(testCharacters[1]).map((result, i)=>{
        let source=testCharacters[1].special[i];
        return [source.name, 'description' in source, result.description, i]
    })
)('examine description for %s (%s) = %s', (_, descriptionIsAvailable, received, i) => {
  if (descriptionIsAvailable) {
    expect(testCharacters[1].special[i].description).toBe(received);
  } else {
    expect(received).toBe('Описание недоступно');
  }
})
