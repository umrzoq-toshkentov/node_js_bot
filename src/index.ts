import { Telegraf } from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const bot = new Telegraf(BOT_TOKEN);

// Log all incoming messages to terminal
bot.on("message", (ctx) => {
  const message = ctx.message;
  const from = ctx.from;

  console.log(`[${new Date().toISOString()}] Message from ${from?.first_name} (${from?.id}):`);

  if ("text" in message) {
    console.log(`  Text: ${message.text}`);
  } else if ("photo" in message) {
    console.log(`  Photo received`);
  } else if ("sticker" in message) {
    console.log(`  Sticker: ${message.sticker.emoji}`);
  } else if ("document" in message) {
    console.log(`  Document: ${message.document.file_name}`);
  } else {
    console.log(`  Other message type`);
  }
  console.log("");
});

bot.launch();

// Graceful shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

console.log("Bot is running...");
