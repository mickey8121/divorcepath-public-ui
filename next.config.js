module.exports = {
  basePath: '/canada',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/spousal-support-calculator',
        permanent: true,
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },

      use: ['@svgr/webpack'],
    });

    return config;
  },
};
