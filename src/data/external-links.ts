interface EmailLink {
  type: 'email';
  href: 'mailto:jenningsdhunter@gmail.com';
}
interface SocialLink {
  type: 'social';
  name: string;
  shortName: string;
  href: string;
}
export type ExternalLink = EmailLink | SocialLink;
export const externalLinks: ExternalLink[] = [
  {
    type: 'email',
    href: 'mailto:jenningsdhunter@gmail.com',
  },
  {
    type: 'social',
    name: 'Github',
    shortName: 'Gh',
    href: 'https://github.com/h-jennings',
  },
  {
    type: 'social',
    name: 'LinkedIn',
    shortName: 'Li',
    href: 'https://www.linkedin.com/in/hunter-jennings-591877b0/',
  },
  {
    type: 'social',
    name: 'Twitter',
    shortName: 'Tw',
    href: 'https://twitter.com/jennings_hunter',
  },
];

export function isSocialLink(link: ExternalLink): link is SocialLink {
  return link.type === 'social';
}
export function isEmailLink(link: ExternalLink): link is EmailLink {
  return link.type === 'email';
}
