module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleFileExtensions: ['ts', 'mjs', 'cjs', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
};
