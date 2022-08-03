export default function checkUserExist(id: number, users: any): boolean {
  let test = false;

  users
    .findAll({
      where: {
        id: id,
      },
    })
    .then(async function (res: any) {
      if (res.length === 0) {
        test = await true;
      }
    })
    .catch((error: any) => console.log(error.message));

  return test;
}
