import { decodeHtml } from '@/helpers/decode-html';

const title = `Portfolio ${decodeHtml('&mdash;')} Hunter Jennings`;
const description = 'Front End Engineer based in Washington D.C.';

const SEO = {
  title,
  description,
  canonical: 'https://www.hunterjennings.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.hunterjennings.dev',
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
