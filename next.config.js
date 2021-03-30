const redirect = require('./config/redirect');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirect;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
