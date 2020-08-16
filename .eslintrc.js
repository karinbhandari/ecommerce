// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
  },
  env: { es6: true },
  plugins: ['cypress', 'testing-library', 'jest-dom'],
  extends: [
    'eslint:recommended', // eslint default rules
    'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    'plugin:jsx-a11y/recommended', // accessibility plugin

    // Prettier
    `prettier/@typescript-eslint`,
    `plugin:prettier/recommended`,

    // Jest dom
    'plugin:jest-dom/recommended',

    // Testing library
    'plugin:testing-library/react',
    'plugin:testing-library/recommended',

    // cypress
    'plugin:cypress/recommended',
  ],
  rules: {
    'react/display-name': 'off',
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    'react/prop-types': 'off', // We turn off prop-types rule, as we will use TypeScript's types instead.

    // Jest dom
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',

    // Testing library
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',

    // cypress
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
  },
};
