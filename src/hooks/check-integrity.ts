import { Hook, HookContext } from "@feathersjs/feathers";
import checkUserExist from "./functions/checkUserExist";
import checkForDuplicates from "./functions/checkForDuplicates";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const users = context.app.services.users.Model;
    const listUser = context.app.services.listUsers.Model;

    const add_users: number[] = context.data.userId;
    const todo_id: number = context.data.todoId;

    // Check if user exist in database
    for (const id of add_users) {
      await checkUserExist(id, users);
      await checkForDuplicates(id, todo_id, listUser);
    }

    return context;
  };
};
