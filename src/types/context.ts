import { Context, Scenes } from "telegraf";

export interface BotWizardSession extends Scenes.WizardSessionData {
  note?: {
    title: string;
    content: string;
  };
}

export interface BotContext extends Context {
  session: Scenes.WizardSession<BotWizardSession>;
  scene: Scenes.SceneContextScene<BotContext, BotWizardSession>;
  wizard: Scenes.WizardContextWizard<BotContext> & { state: BotWizardSession };
}
