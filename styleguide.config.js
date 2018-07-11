const { createConfig, babel } = require('webpack-blocks');

module.exports = {
  components: 'src/components/**/*.jsx',
  webpackConfig: createConfig([babel()]),
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'src/sample.css'
        }
      ]
    }
  }
}
