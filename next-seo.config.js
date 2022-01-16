import { decodeHtml } from '@/helpers/decode-html';

const title = `Portfolio ${decodeHtml('&mdash;')} Hunter Jennings`;
const description = 'Front End Engineer based in Washington D.C.';

const SEO = {
  title,
  description,
  canonical: 'https://v2.hunterjennings.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://v2.hunterjennings.dev',
    images: [
      {
        url:
          'https://v2.hunterjennings.dev/images/social/social-screen_home.png',
        alt: 'Screenshot of webpage',
      },
    ],
    title,
    description,
  },
  twitter: {
    handle: '@jennings_hunter',
    site: '@jennings_hunter',
    cardType: 'summary_large_image',
  },
};

export default SEO;
