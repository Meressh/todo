// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const items = context.app.services.items.Model;
    const users = context.app.services.users.Model;
    let include;

    if (context.params.authentication?.strategy === "jwt") {
      include = [
        {
          model: items,
          as: "items",
          attributes: {
            exclude: ["todoId"],
          },
        },
        {
          model: users,
          as: "users",
          attributes: {
            exclude: ["password"],
          },
        },
      ];
    } else {
      include = [
        {
          model: items,
          as: "items",
          attributes: {
            exclude: ["todoId", "userId"],
          },
        },
      ];
    }

    context.params.sequelize = {
      include: include,
      raw: false,
    };

    return context;
  };
};
