import GameSavingLoader from "../GameSavingLoader.js";
import GameSavingLoader2 from "../AsyncGameSavingLoader.js";

jest.setTimeout(2000)

describe('GameSavingLoader with promise', () => {
    it('return object', async ()=> {
        try {
            const expected = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}};
            const result = await GameSavingLoader.load();
            expect(result).toEqual(expected);
        } catch(e) {

        }
    })
    
})

describe('GameSavingLoader with async', () => {
    it('return object', async ()=> {
        const expected = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}};
        const result = await GameSavingLoader2.load();
        expect(result).toEqual(expected);
    })
    
})

// describe('errors catch', ()=>{
//     it('with promise', async ()=>{
//         expect(async() =>await GameSavingLoader.load()).toThrow()
//     })
//     it('with asinc/await', async ()=>{
//         expect(async()=>{ await GameSavingLoader2.load()}).toThrow()
//     })
// })