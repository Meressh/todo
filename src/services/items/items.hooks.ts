import * as authentication from "@feathersjs/authentication";

import xssProtectionItems from "../../hooks/xss-protection-items";
import checkRelation from "../../hooks/check-relation";
import disallowId from "../../hooks/disallow-id";
import checkIfUserbelongsToTodo from "../../hooks/check-if-userbelongs-to-todo";
import checkIfItemBelongsToUser from "../../hooks/check-if-item-belongs-to-user";
import checkForInput from "../../hooks/check-for-input";
// import checkRelationParam from "../../hooks/check-relation-param";

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate("jwt")],
    find: [authenticate("jwt")], // We can receive data without check of user is related to todo or not, but that can by easily changed by adding hook for checking userId and todoID, those hooks are below. I choose to do not limit this endpoint for now.
    get: [authenticate("jwt")], // We can receive data without check of user is related to todo or not, but that can by easily changed by adding hook for checking userId and todoID, those hooks are below. I choose to do not limit this endpoint for now.
    create: [authenticate("jwt"), xssProtectionItems(), checkRelation()],
    update: [
      authenticate("jwt"),
      xssProtectionItems(),
      disallowId(),
      checkIfItemBelongsToUser(),
    ],
    patch: [
      authenticate("jwt"),
      xssProtectionItems(),
      disallowId(),
      checkIfUserbelongsToTodo(),
      checkForInput(),
    ],
    remove: [authenticate("jwt"), checkIfItemBelongsToUser()],
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
