module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@react-native-community',
    'react',
    'react-native',
    'jest',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': ['warn', { skip: ['CustomText'] }],
    'react-native/no-color-literals': 'off',
    'padding-line-between-statements': ['error', { blankLine: 'any', prev: '*', next: '*' }],
    'brace-style': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
