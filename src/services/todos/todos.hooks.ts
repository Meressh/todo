import { HooksObject } from "@feathersjs/feathers";
import itemsAssociation from "../../hooks/items-association";

import * as authentication from "@feathersjs/authentication";

import addToJunctionTable from "../../hooks/add-to-junction-table";
import allowAnonymous from "../../hooks/allow-anonymous";

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [
      allowAnonymous(),
      authenticate("jwt", "anonymous"),
      itemsAssociation(),
    ],
    get: [
      allowAnonymous(),
      authenticate("jwt", "anonymous"),
      itemsAssociation(),
    ],
    create: [authenticate("jwt")],
    update: [authenticate("jwt")],
    patch: [authenticate("jwt")],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addToJunctionTable()],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
