import GameSavingLoader from "./GameSavingLoader.js";
import GameSavingLoader2 from "./AsyncGameSavingLoader.js";

GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
    console.log(saving)
  }, (error) => {
    // ...
    console.log(error)
  });

  (async () => {
    const result = await GameSavingLoader2.load()
    console.log(result)
  })();