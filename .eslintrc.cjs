/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    'vue/no-unused-vars': 'error',
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  }
}
