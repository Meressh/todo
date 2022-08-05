import { HooksObject } from "@feathersjs/feathers";
import itemsAssociation from "../../hooks/items-association";

import * as authentication from "@feathersjs/authentication";

import allowAnonymous from "../../hooks/allow-anonymous";

import xssProtection from "../../hooks/xss-protection";

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
    create: [authenticate("jwt"), xssProtection()],
    update: [authenticate("jwt"), xssProtection()],
    patch: [authenticate("jwt"), xssProtection()],
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
