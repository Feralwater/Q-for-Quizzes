/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/no-unused-vars': 'error',
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/valid-v-slot': 'off',
  }
}
