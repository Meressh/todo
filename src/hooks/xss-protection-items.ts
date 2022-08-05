// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";
import xssProtection from "./functions/xssProtectionItems";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const clean = await xssProtection(context.data.title, context.data.text);

    context.data.title = clean[0];
    context.data.text = clean[1];

    return context;
  };
};
