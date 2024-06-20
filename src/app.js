import GameSavingLoader from "./GameSavingLoader.js";

console.log('start')
GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
    console.log(saving)
  }, (error) => {
    // ...
    console.log(error)
  });