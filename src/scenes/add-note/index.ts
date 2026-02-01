import { Scenes } from "telegraf";
import { message } from "telegraf/filters";
import { BotContext } from "../../types/context";

export const ADD_NOTE_SCENE = "ADD_NOTE_SCENE";

const addNoteScene = new Scenes.WizardScene<BotContext>(
  ADD_NOTE_SCENE,
  async (ctx) => {
    await ctx.reply("Please enter your note title:");
    ctx.wizard.state.note = {
      title: "",
      content: "",
    };
    ctx.wizard.next();
  },
  async (ctx) => {
    if (ctx.has(message("text"))) {
      ctx.wizard.state.note!.title = ctx.message.text;
      await ctx.reply("Please enter your note content:");
      ctx.wizard.next();
    }
  },
  async (ctx) => {
    if (ctx.has(message("text"))) {
      ctx.wizard.state.note!.content = ctx.message.text;
      await ctx.reply(
        `Your note:\nTitle: ${ctx.wizard.state.note!.title}\nContent: ${ctx.wizard.state.note!.content}`
      );
      ctx.scene.leave();
    }
  }
);

export { addNoteScene };
