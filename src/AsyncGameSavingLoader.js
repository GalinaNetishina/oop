import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const stringJson = await json(data);
      return JSON.parse(stringJson);
    } catch (e) {
      throw e;
    }
  }
}
