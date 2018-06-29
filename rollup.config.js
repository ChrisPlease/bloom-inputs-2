import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';
import { terser } from 'rollup-plugin-terser';

// const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers', 'transform-class-properties']
  }),
  resolve(),
  commonjs({
    include: 'node_modules/**'
  }),
  terser({mangle: {properties: true}}),
  multiEntry()
];

// export default [
//   {
//     input: {
//       include: ['src/**/*.jsx'],
//       exclude: ['src/index.js']
//     },
//     experimentalCodeSplitting: false,
//     experimentalDynamicImport: false,
//     output: {
//       dir: 'dist',
//       name: '[name].js',
//       format: 'es',
//       sourcemaps: true
//     },
//     external: ['react', 'prop-types'],
//     plugins
//   },
//   {
//     input: {
//       include: ['src/index.js'],
//       exclude: ['src/**/*.jsx']
//     },
//     output: {
//       file: 'dist/index.js',
//       format: 'es',
//       sourcemap: true
//     },
//     experimentalCodeSplitting: false,
//     experimentalDynamicImport: false,
//     external: ['react', 'prop-types'],
//     plugins
//   }
// ];

export default {
  input: ['./src/index.js', './src/**/*.jsx'],
  output: {
    entryFileNames: '[name].js',
    dir: `dist`,
    format: 'es',
    sourcemap: true
  },
  experimentalCodeSplitting: true,
  experimentalDynamicImport: true,
  external: ['react', 'prop-types', 'isEmail'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers', 'transform-class-properties']
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    // terser({mangle: {properties: true}}),
    multiEntry()
  ]
};
