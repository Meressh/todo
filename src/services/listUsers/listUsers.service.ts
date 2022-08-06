// Initializes the `listUsers` service on path `/listUsers`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { ListUsers } from "./listUsers.class";
import createModel from "../../models/listUsers.model";
import hooks from "./listUsers.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    listUsers: ListUsers & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use("/listUsers", new ListUsers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("listUsers");

  service.hooks(hooks);
}
