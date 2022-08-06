// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { BadRequest, Forbidden } from "@feathersjs/errors";
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const items = context.app.services.items.Model;
    const listUsers = context.app.services.listUsers.Model;

    const getItem = await items.findAll({
      where: {
        id: context.id,
      },
    });

    if (getItem.length === 0) {
      throw new BadRequest(`Item with ID: ${context.id} does not exist!`);
    }

    const listUser = await listUsers.findAll({
      where: {
        userId: context.params.user?.id,
        todoId: getItem[0].toJSON().todoId,
      },
    });

    if (listUser.length === 0) {
      throw new BadRequest(
        `You are not connected with this Todo list with ID: ${
          getItem[0].toJSON().todoId
        }
        }!`
      );
    }

    return context;
  };
};
