// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/hooks";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const items = sequelizeClient.define(
    "items",
    {
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      deadline: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      todoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
  (items as any).associate = function (models: any): void {
    const { users, todos } = models;
    items.belongsTo(todos);
    items.belongsTo(users);
  };

  return items;
}
