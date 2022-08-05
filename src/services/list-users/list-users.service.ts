// Initializes the `listUsers` service on path `/list-users`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ListUsers } from './list-users.class';
import createModel from '../../models/list-users.model';
import hooks from './list-users.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'list-users': ListUsers & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/list-users', new ListUsers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('list-users');

  service.hooks(hooks);
}
