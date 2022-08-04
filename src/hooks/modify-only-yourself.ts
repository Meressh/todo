// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";
import { Forbidden } from "@feathersjs/errors";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    if (context.params.user == null || context.id == null) {
      throw new Forbidden("Users or id missing!");
    }
    const auth_user: number = context.params.user.id;
    const user_id = context.id;

    if (auth_user !== user_id) {
      throw new Forbidden("You can't modify someone else!");
    }

    return context;
  };
};
