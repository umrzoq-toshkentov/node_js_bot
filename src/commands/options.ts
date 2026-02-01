import { Markup } from "telegraf";
import type { BotContext } from "../types/context";

export function optionsCommand(ctx: BotContext) {
  ctx.reply(
    "Choose an option: ",
    Markup.inlineKeyboard([
      [Markup.button.callback("Yes", "yes")],
      [Markup.button.callback("No", "no")],
    ])
  );
}
