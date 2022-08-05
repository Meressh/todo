// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { BadRequest } from "@feathersjs/errors";
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const listUsers = context.app.services.listUsers.Model;

    const check = await listUsers.findAll({
      where: {
        userId: context.data.userId,
        todoId: context.data.todoId,
      },
    });

    if (check.length === 0) {
      throw new BadRequest(
        `User with ID: ${context.data.userId} is not assigned to todo with ID: ${context.data.todoId}`
      );
    }

    return context;
  };
};
