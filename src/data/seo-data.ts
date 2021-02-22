import { decodeHtml } from '@/helpers/decode-html';
import { Paths } from '@/models/paths';

const emDash = decodeHtml('&mdash;');
const absoluteUrl = 'https://hunterjennings.dev';

const pagesData: Record<
  string,
  { title: string; description: string; imageUrl: string; canonical: string }
> = {
  about: {
    title: `Portfolio ${emDash} About`,
    // eslint-disable-next-line quotes
    description: "I'm Hunter. I've been wrangling pixels and shapes since 2017",
    imageUrl: `${absoluteUrl}/images/social/social-screen_about.png`,
    canonical: `${absoluteUrl}${Paths.about}`,
  },
  caffeinator: {
    title: `Portfolio ${emDash} Caffeinator`,
    description: 'An app for building the perfect cup of coffee.',
    imageUrl: `${absoluteUrl}/images/social/social-screen_caffeinator.png`,
    canonical: `${absoluteUrl}${Paths.caffeinator}`,
  },
  ['portfolio-v1']: {
    title: `Portfolio ${emDash} V1`,
    description: 'My first portfolio, created in 2019.',
    imageUrl: `${absoluteUrl}/images/social/social-screen_pv1.png`,
    canonical: `${absoluteUrl}${Paths.portfolioV1}`,
  },
  dod: {
    title: `Portfolio ${emDash} DoD`,
    description:
      'Web application for the next generation of defense technology',
    imageUrl: `${absoluteUrl}/images/social/social-screen_dod.png`,
    canonical: `${absoluteUrl}${Paths.dod}`,
  },
};

export const pagesMetaData = Object.fromEntries(
  Object.entries(pagesData).map(([key, val]) => {
    const value = {
      title: val.title,
      description: val.description,
      canonical: val.canonical,
      openGraph: {
        title: val.title,
        description: val.description,
        images: [
          {
            url: val.imageUrl,
          },
        ],
      },
    };
    return [key, value];
  }),
);
