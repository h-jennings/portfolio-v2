/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            SVGO: false,
          },
        },
        'url-loader',
      ],
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer({
        enabled: process.env.ANALYZE === 'true',
      }),
    ],
  ],
  nextConfig,
);
