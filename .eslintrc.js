module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'eslint-plugin-react-hooks',
    'pc-test',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'import/no-unresolved': 'off',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'react/function-component-definition': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: [
        'data-testid',
        'to',
        'target',
        'justify',
        'align',
        'direction',
        'gap',
      ],
    }],
    'max-len': ['error', {
      ignoreComments: true,
      code: 110,
    }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'pc-test/path-checker': 'error',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }],
};
