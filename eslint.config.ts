import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,ts,mjs,mts,cjs,jsx,tsx}'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginReactHooks.configs['recommended-latest'],
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'class-methods-use-this': 'off',
      'import/prefer-default-export': 'off',
      'no-console': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
      'react/jsx-no-bind': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-uses-vars': 'error',
    },
  },
];
