import { BadRequest } from "@feathersjs/errors";

export default async function checkUserExist(
  id: number,
  users: any
): Promise<void> {
  const check = await users.findAll({
    where: {
      id: id,
    },
  });

  if (check.length === 0) {
    throw new BadRequest("User not found in database!");
  }
}
