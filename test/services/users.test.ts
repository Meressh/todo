import assert from "assert";
import app from "../../src/app";

describe("'users' service", () => {
  it("registered the service", async () => {
    const service = await app.service("users").create({
      email: "test1@test.com",
      password: "supersecret",
    });

    assert.ok(service.password !== "supersecret");

    it("removes password for external requests", async () => {
      // Setting `provider` indicates an external request
      const params = { provider: "rest" };

      const user = await app.service("users").create(
        {
          email: "test2@test.com",
          password: "secret",
        },
        params
      );

      // Make sure password has been removed
      assert.ok(!user.password);
    });

    // Create a new user we can use for testing
    assert.ok(service, "Registered the service");
  });
});
