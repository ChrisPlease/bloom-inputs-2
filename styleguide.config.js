const { createConfig, babel } = require('webpack-blocks');

module.exports = {
  components: 'src/components/**/*.jsx',
  webpackConfig: createConfig([babel()])
}
