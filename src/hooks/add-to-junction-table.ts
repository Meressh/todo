// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";
import checkUserExist from "./functions/checkUserExist";
import { BadRequest } from "@feathersjs/errors";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const users = context.app.services.users.Model;
    const add_users: number[] = context.data.users;
    // const auth_user: number = context.params.user?.id;

    // console.log(add_users);

    add_users.forEach(async (id) => {
      if (await checkUserExist(id, users)) {
        throw new BadRequest("User not found in database with id: " + id);
      }
    });

    return context;
  };
};
