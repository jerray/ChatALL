import AsyncLock from "async-lock";

import BingChatBot from "./BingChatBot";

export default class BingChatPreciseBot extends BingChatBot {
  static _className = "BingChatPreciseBot"; // Class name of the bot
  static _logoFilename = "bing-precise-logo.png"; // Place it in assets/bots/
  static _model = "h3precise"; // Bing styles: h3imaginative, harmonyv3, h3precise
  static _lock = new AsyncLock(); // Must process requests in queue

  constructor() {
    super();
  }
}
