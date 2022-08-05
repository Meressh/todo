import escapeHTML from "escape-html";
import DOMPurify from "isomorphic-dompurify";

export default async function xssProtection(
  title: string,
  text: string
): Promise<string[]> {
  // DOMPurify.sanitize removes script which can caouse XSS attack a escapeHTML escape the html text
  const xssRemoveTitle = DOMPurify.sanitize(title);
  const xssRemoveText = DOMPurify.sanitize(text);

  const escapedTitle = escapeHTML(xssRemoveTitle);
  const escapedText = escapeHTML(xssRemoveText);

  // You can also remove script with xssRemove and return;
  return [escapedTitle, escapedText];
}
