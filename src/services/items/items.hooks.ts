import { HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";
import xssProtection from "../../hooks/xss-protection-items";

import xssProtectionItems from "../../hooks/xss-protection-items";
import checkRelation from "../../hooks/check-relation";

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [xssProtectionItems(), checkRelation()],
    update: [xssProtectionItems(), checkRelation()],
    patch: [xssProtectionItems(), checkRelation()],
    remove: [],
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
