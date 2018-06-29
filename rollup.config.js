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
  resolve(),
  commonjs({
    include: 'node_modules/**'
  }),
  terser({mangle: {properties: true}})
];

const commonConfig = {
  output: {
    format: 'es',
    // sourcemap: true
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
      file: 'dist/index.js'
    }
  },
  {
    ...commonConfig,
    input: sync('src/components/**/*.jsx').map(f => f),
    output: {
      ...commonConfig.output,
      dir: 'dist'
    },
    experimentalCodeSplitting: true
  }
];
