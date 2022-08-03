// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/hooks";
import { Op } from "sequelize";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const users = sequelizeClient.define(
    "users",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notNull: true,
          notEmpty: true,
          isUnique: function (value: string, next: any) {
            users
              .findAll({
                where: {
                  email: value,
                  id: { [Op.ne]: this.id },
                },
              })
              .then(function (result) {
                if (result.length != 0) {
                  next(new Error("Email address already in use!"));
                }
                next();
              })
              .catch((error) => console.log(error.message));
          },
        },
      },
      password: {
        type: DataTypes.STRING,
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
  (users as any).associate = function (models: any): void {
    const { todos, items } = models;
    users.belongsToMany(todos, { through: "ListUsers" });
    users.hasMany(items);
  };

  return users;
}
