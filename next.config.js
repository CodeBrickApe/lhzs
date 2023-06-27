const path = require('path');

const rules = [
  {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/, /\.cur$/, /\.ani$/],
    use: [
      {
        loader: 'url-loader',
      },
    ],
  },
  {
    test: /\.svg$/,
    use: [
      { loader: 'svg-sprite-loader', options: {} }
    ],
  }
]

const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack },
  ) => {
    config.module.rules.push(...rules)

    return config
  },
}

module.exports = nextConfig
