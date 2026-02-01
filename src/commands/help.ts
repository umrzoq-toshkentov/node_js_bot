import type { BotContext } from "../types/context";

export function helpCommand(ctx: BotContext) {
  ctx.reply("Help message");
}
