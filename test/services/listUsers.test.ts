import assert from "assert";
import app from "../../src/app";

describe("'listUsers' service", () => {
  it("registered the service", () => {
    const service = app.service("listUsers");

    assert.ok(service, "Registered the service");
  });
});
