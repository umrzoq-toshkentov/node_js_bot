import type { BotContext } from "../types/context";

export function yesAction(ctx: BotContext) {
  ctx.reply("You chose Yes");
}

export function noAction(ctx: BotContext) {
  ctx.reply("You chose No");
}
