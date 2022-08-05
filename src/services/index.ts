import { Application } from '../declarations';
import users from './users/users.service';
import todos from './todos/todos.service';
import items from './items/items.service';
import listUsers from './list-users/list-users.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(todos);
  app.configure(items);
  app.configure(listUsers);
}
