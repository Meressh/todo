import { BadRequest } from "@feathersjs/errors";
import escapeHTML from "escape-html";
import DOMPurify from "isomorphic-dompurify";

export default async function xssProtection(text: string): Promise<string> {
  // DOMPurify.sanitize removes script which can caouse XSS attack a escapeHTML escape the html text
  const xssRemove = DOMPurify.sanitize(text);
  const escapedText = escapeHTML(xssRemove);

  // You can also remove script with xssRemove and return;
  return escapedText;
}
