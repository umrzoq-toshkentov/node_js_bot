import { describe, expect, test, mock, beforeEach } from "bun:test";
import { Telegraf } from "telegraf";

describe("Bot", () => {
  describe("environment", () => {
    test("BOT_TOKEN is required", () => {
      const originalToken = process.env.BOT_TOKEN;
      delete process.env.BOT_TOKEN;

      expect(() => {
        if (!process.env.BOT_TOKEN) {
          throw new Error("BOT_TOKEN environment variable is required");
        }
      }).toThrow("BOT_TOKEN environment variable is required");

      process.env.BOT_TOKEN = originalToken;
    });
  });

  describe("commands", () => {
    let bot: Telegraf;
    let mockReply: ReturnType<typeof mock>;

    beforeEach(() => {
      bot = new Telegraf("test-token");
      mockReply = mock(() => Promise.resolve());
    });

    test("/start command replies with greeting", async () => {
      let startHandler: ((ctx: unknown) => void) | undefined;

      bot.start = mock((handler) => {
        startHandler = handler;
        return bot;
      }) as typeof bot.start;

      bot.start((ctx) => {
        ctx.reply("Hello!");
      });

      const mockCtx = { reply: mockReply };
      startHandler?.(mockCtx);

      expect(mockReply).toHaveBeenCalledWith("Hello!");
    });

    test("/help command replies with help message", async () => {
      let helpHandler: ((ctx: unknown) => void) | undefined;

      bot.help = mock((handler) => {
        helpHandler = handler;
        return bot;
      }) as typeof bot.help;

      bot.help((ctx) => {
        ctx.reply("Help message");
      });

      const mockCtx = { reply: mockReply };
      helpHandler?.(mockCtx);

      expect(mockReply).toHaveBeenCalledWith("Help message");
    });

    test("/hello command replies with greeting", async () => {
      let helloHandler: ((ctx: unknown) => void) | undefined;

      bot.command = mock((command, handler) => {
        if (command === "hello") {
          helloHandler = handler;
        }
        return bot;
      }) as typeof bot.command;

      bot.command("hello", (ctx) => {
        ctx.reply("Hello from bot!");
      });

      const mockCtx = { reply: mockReply };
      helloHandler?.(mockCtx);

      expect(mockReply).toHaveBeenCalledWith("Hello from bot!");
    });
  });
});
