import { Html5Entities as Entities } from 'html-entities';

export function decodeHtml(html: string): string {
  const ent = new Entities();
  return ent.decode(html);
}
