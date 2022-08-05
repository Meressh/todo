// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/hooks";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const listUsers = sequelizeClient.define(
    "listUsers",
    {
      userId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      todoId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (listUsers as any).associate = function (models: any): void {
    const { todos, users } = models;
    listUsers.belongsTo(users);
    listUsers.belongsTo(todos);
  };

  return listUsers;
}
