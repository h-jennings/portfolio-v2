import { decodeHtml } from '@/helpers/decode-html';

const emDash = decodeHtml('&mdash;');

const pagesData: Record<
  string,
  { title: string; description: string; imageUrl: string }
> = {
  about: {
    title: `Portfolio ${emDash} About`,
    // eslint-disable-next-line quotes
    description: "I'm Hunter. I've been wrangling pixels and shapes since 2017",
    imageUrl: '/images/social/social-screen_about.png',
  },
  caffeinator: {
    title: `Portfolio ${emDash} Caffeinator`,
    description: 'An app for building the perfect cup of coffee.',
    imageUrl: '/images/social/social-screen_caffeinator.png',
  },
  ['portfolio-v1']: {
    title: `Portfolio ${emDash} V1`,
    description: 'My first portfolio, created in 2019.',
    imageUrl: '/images/social/social-screen_pv1.png',
  },
  dod: {
    title: `Portfolio ${emDash} DoD`,
    description:
      'Web application for the next generation of defense technology',
    imageUrl: '/images/social/social-screen_dod.png',
  },
};

export const pagesMetaData = Object.fromEntries(
  Object.entries(pagesData).map(([key, val]) => {
    const value = {
      title: val.title,
      description: val.description,
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
