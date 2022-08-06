// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";
import { createTransport } from "nodemailer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const users = context.app.services.users.Model;

    const createTran = createTransport({
      host: "smtp.example.net",
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: "example@test.sk",
        pass: "D(R1u600=kR6qP-;s",
      },
    });

    const userEmail = await users.findAll({
      where: {
        id: context.data.userId,
      },
    });

    createTran.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
        const message = {
          from: "example@test.sk",
          to: userEmail[0].toJSON().email,
          subject: "You have been added to a todo list",
          text: `You have been added to a todo list check url: https://example.com/todo/${context.data.todoId}`,
          html: `<p>You have been added to a todo list list check url: https://example.com/todo/${context.data.todoId}</p>`,
        };

        createTran.sendMail(message);
      }
    });

    return context;
  };
};
