import type { BotContext } from "../types/context";

export function helloCommand(ctx: BotContext) {
  ctx.reply("Hello from bot!");
}
