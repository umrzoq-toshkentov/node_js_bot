import { Telegraf } from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => {
  ctx.reply("Hello!");
});

bot.help((ctx) => {
  ctx.reply("Help message");
});

bot.command("hello", (ctx) => {
  ctx.reply("Hello from bot!");
});

bot.on("text", (ctx) => {
  console.log(ctx);
});

bot.on("photo", (ctx) => {
  ctx.reply("Rasm qabul qilindi!");
});

bot.launch();

console.log("Bot is running...");
