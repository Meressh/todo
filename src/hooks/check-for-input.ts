// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { BadRequest } from "@feathersjs/errors";
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    if (
      context.data.title ||
      context.data.text ||
      context.data.deadline ||
      context.data.createdAt ||
      context.data.updatedAt
    ) {
      throw new BadRequest(
        `You cannot change title, text, deadline, userId, todoId, createdAt, updatedAt in this endpoint only type!`
      );
    }

    return context;
  };
};
