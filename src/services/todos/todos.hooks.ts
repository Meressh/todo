import itemsAssociation from "../../hooks/items-association";

import * as authentication from "@feathersjs/authentication";

import allowAnonymous from "../../hooks/allow-anonymous";
import xssProtection from "../../hooks/xss-protection";
import { disallow } from "feathers-hooks-common";

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
    update: [disallow()], // authenticate("jwt"), xssProtection(), -> For now the update  is disallowed -> Maybe add hook to check if user is admin or so.
    patch: [disallow()], // authenticate("jwt"), xssProtection(), - > For now the patch is disallowed -> Maybe add hook to check if user is admin or so.
    remove: [disallow()], // authenticate("jwt"), -> For now the remove is disallowed -> Maybe add hook to check if user is admin or so.
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
