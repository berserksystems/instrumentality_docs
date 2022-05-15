const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc({ mode: 'static' })({
  reactStrictMode: true,
  pageExtensions: ['js', 'md', 'mdoc'],
  redirects() {
    return [
      // {
      //   source: '/docs',
      //   destination: '/docs/quick_start',
      //   permanent: false
      // }
    ];
  },
});
