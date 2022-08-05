import assert from "assert";
import app from "../../src/app";

describe("'Todos' service", () => {
  it("registered the service", async () => {
    const service = await app.service("todos").create({
      title: "Test title 1",
    });

    assert.ok(service, "Registered the service");
  });
});
