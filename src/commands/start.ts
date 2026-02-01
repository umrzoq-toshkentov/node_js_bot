import type { BotContext } from "../types/context";

export function startCommand(ctx: BotContext) {
  ctx.reply("Hello!");
}
