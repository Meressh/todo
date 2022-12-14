import * as feathersAuthentication from "@feathersjs/authentication";
import * as local from "@feathersjs/authentication-local";
import modifyOnlyYourself from "../../hooks/modify-only-yourself";
import { disallow } from "feathers-hooks-common";

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [],
    find: [authenticate("jwt")],
    get: [authenticate("jwt")],
    create: [hashPassword("password")],
    update: [
      hashPassword("password"),
      authenticate("jwt"),
      modifyOnlyYourself(),
    ],
    patch: [
      hashPassword("password"),
      authenticate("jwt"),
      modifyOnlyYourself(),
    ],
    remove: [disallow()], // authenticate("jwt"), modifyOnlyYourself(), -> For now is disallowed
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
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
