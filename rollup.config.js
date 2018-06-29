import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import { sync } from 'globby';

const plugins = [
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers', 'transform-class-properties']
  }),
  resolve({browser: true}),
  commonjs({
    include: 'node_modules/**'
  }),
  // terser()
];

const commonConfig = {
  output: {
    format: 'es',
    sourcemap: true
  },
  external: ['react', 'prop-types'],
  plugins
}

export default [
  {
    ...commonConfig,
    input: 'src/index.js',
    output: {
      ...commonConfig.output,
      file: 'lib/index.js'
    }
  },
  {
    ...commonConfig,
    input: sync('src/components/**/*.jsx').map(f => f),
    output: {
      ...commonConfig.output,
      dir: 'lib'
    },
    experimentalCodeSplitting: true
  }
];
