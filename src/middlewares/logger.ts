import type { MiddlewareFn } from "telegraf";
import type { BotContext } from "../types/context";

export const loggerMiddleware: MiddlewareFn<BotContext> = (ctx, next) => {
  console.log("Middleware executed");
  return next();
};
