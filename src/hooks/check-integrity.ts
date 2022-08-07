import { Hook, HookContext } from "@feathersjs/feathers";
import checkUserExist from "./functions/checkUserExist";
import checkForDuplicates from "./functions/checkForDuplicates";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const users = context.app.services.users.Model;
    const listUser = context.app.services.listUsers.Model;

    if (context.data.length == 1) {
      const add_users: number = context.data.userId
        ? context.data.userId
        : context.data[0].userId;
      const todo_id: number = context.data.todoId
        ? context.data.todoId
        : context.data[0].todoId;

      // Check if user exist in database
      await checkUserExist(add_users, users);
      await checkForDuplicates(add_users, todo_id, listUser);
    }
    if (context.data.length > 1) {
      for (const iterator of context.data) {
        // Check if user exist in database
        await checkUserExist(iterator.userId, users);
        await checkForDuplicates(iterator.userId, iterator.todoId, listUser);
      }
    }

    // // Check if user exist in database
    // await checkUserExist(add_users, users);
    // await checkForDuplicates(add_users, todo_id, listUser);

    // for (const id of add_users) {
    //   await checkUserExist(id, users);
    //   await checkForDuplicates(id, todo_id, listUser);
    // }

    return context;
  };
};
