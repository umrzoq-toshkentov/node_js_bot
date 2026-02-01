import { Scenes, Telegraf, session } from "telegraf";
import { startCommand, helpCommand, helloCommand, menuCommand, optionsCommand } from "./commands";
import { loggerMiddleware } from "./middlewares";
import { yesAction, noAction, onPhoto } from "./handlers";
import { BotContext } from "./types/context";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const bot = new Telegraf<BotContext>(BOT_TOKEN);
const stage = new Scenes.Stage<BotContext>();

// Middlewares
bot.use(session());
bot.use(loggerMiddleware);
bot.use(stage.middleware());

// Commands
bot.start(startCommand);
bot.help(helpCommand);
bot.command("hello", helloCommand);
bot.command("menu", menuCommand);
bot.command("options", optionsCommand);

// Actions
bot.action("yes", yesAction);
bot.action("no", noAction);

// Event handlers
bot.on("photo", onPhoto);

bot.launch();

console.log("Bot is running...");
