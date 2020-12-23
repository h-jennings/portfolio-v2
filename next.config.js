/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withImages = require('next-images');

const nextConfig = {
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/generate-sitemap');
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            titleProp: true,
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
      withImages,
      {
        exclude: path.resolve(__dirname, 'src/assets/svg'),
      },
    ],
    [
      withBundleAnalyzer({
        enabled: process.env.ANALYZE === 'true',
      }),
    ],
  ],
  nextConfig,
);
