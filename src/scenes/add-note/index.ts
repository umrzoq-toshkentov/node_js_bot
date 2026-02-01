import { Scenes } from "telegraf";
import { message } from "telegraf/filters";
import { BotContext } from "../../types/context";
import fs from "fs";

export const ADD_NOTE_SCENE = "ADD_NOTE_SCENE";
const notes = JSON.parse(fs.readFileSync("src/data/notes.json", "utf8"));

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
      notes.push({
        userID: ctx.from.id,
        title: ctx.wizard.state.note!.title,
        content: ctx.wizard.state.note!.content,
        createdAt: new Date().toISOString(),
      });
      fs.writeFileSync("src/data/notes.json", JSON.stringify(notes, null, 2));
      ctx.scene.leave();
    }
  }
);

export { addNoteScene };
