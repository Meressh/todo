import { BadRequest } from "@feathersjs/errors";

export default async function checkForDuplicates(
  userId: number,
  todoId: number,
  listUsers: any
): Promise<void> {
  const check = await listUsers.findAll({
    where: {
      userId: userId,
      todoId: todoId,
    },
  });

  if (check.length === 0) {
    throw new BadRequest(
      `User with ID: ${userId} is connected to this Todo list!`
    );
  }
}
