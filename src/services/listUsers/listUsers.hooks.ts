import * as authentication from "@feathersjs/authentication";
import { disallow } from "feathers-hooks-common";
import checkIntegrity from "../../hooks/check-integrity";
import sendEmail from "../../hooks/send-email";
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate("jwt")],
    find: [disallow()],
    get: [disallow()],
    create: [checkIntegrity()], // We will send Todo id and usser id to create association between user and todo
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()], // remove is not allowed because we will remove data in other hooks -> users or todos
  },

  after: {
    all: [],
    find: [disallow()],
    get: [disallow()],
    create: [sendEmail()],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()],
  },

  error: {
    all: [],
    find: [disallow()],
    get: [disallow()],
    create: [],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()],
  },
};
