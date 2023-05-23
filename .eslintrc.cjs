module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'import', '@typescript-eslint', 'prettier'],
  parser: 'vue-eslint-parser',
  /** @type {import('eslint').Linter.Config['parserOptions'] & import('@typescript-eslint/parser').ParserOptions}*/
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/no-unused-expressions': [1, { allowShortCircuit: true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 1,
    'vue/multi-word-component-names': 0,
  },
};
