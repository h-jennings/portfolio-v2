/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('../.prettierrc');

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    './src/pages/**/*{.js,.jsx,.ts,.tsx,.mdx}',
    '!./src/pages/_*{.js,.jsx,.ts,.tsx,.mdx}',
    '!./src/pages/api',
  ]).then((pages) => {
    const cleaned = pages.map((page) => {
      return page
        .replace('./src/pages', '')
        .replace('.jsx', '')
        .replace('.tsx', '')
        .replace('.mdx', '')
        .replace('.md', '')
        .replace('.js', '')
        .replace('.ts', '');
    });
    return cleaned;
  });
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page;
                const route = path === '/index' ? '' : path;
                return `
                        <url>
                            <loc>${`https://v2.hunterjennings.dev${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
