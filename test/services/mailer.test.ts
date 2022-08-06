import assert from "assert";
import { createTransport } from "nodemailer";

const createTran = createTransport({
  host: "smtp.example.net",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "example@test.sk",
    pass: "password",
  },
});

createTran.verify(function (error, success) {
  if (error) {
    assert.fail(error);
  } else {
    assert.ok("Server is ready to take our messages");
  }
});
