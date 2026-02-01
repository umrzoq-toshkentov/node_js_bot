import { Markup } from "telegraf";
import type { BotContext } from "../types/context";

export function menuCommand(ctx: BotContext) {
  ctx.reply("Choose an option: ", Markup.keyboard([["Add Note", "Show Notes"], ["Help"]]).resize());
}
