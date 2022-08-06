// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { BadRequest, Forbidden } from "@feathersjs/errors";
import { Hook, HookContext } from "@feathersjs/feathers";
import xssProtection from "./functions/xssProtection";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const items = context.app.services.items.Model;

    // const checkId = await items.findAll({
    //   where: {
    //     id: context.id,
    //   },
    // });

    // if (checkId.length === 0) {
    //   throw new BadRequest(`Item with ID: ${context.id} does not exist!`);
    // }

    // if (checkId[0].toJSON().userId != context.params.user?.id) {
    //   throw new Forbidden(
    //     "You can't modify Text and Title someone Todo Items!"
    //   );
    // }

    let clean;
    if (context.data.title) {
      clean = await xssProtection(context.data.title);
      context.data.title = clean;
    }

    if (context.data.text) {
      context.data.text = await xssProtection(context.data.text);
      context.data.text = clean;
    }

    return context;
  };
};
