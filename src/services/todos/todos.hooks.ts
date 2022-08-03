import { HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";

import itemsAssociation from "../../hooks/items-association";

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [authenticate("jwt"), itemsAssociation()],
    get: [itemsAssociation()],
    create: [authenticate("jwt")],
    update: [authenticate("jwt")],
    patch: [authenticate("jwt")],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
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
