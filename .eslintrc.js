module.exports = {
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
      project: './tsconfig.json',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   extends: ['airbnb-typescript', 'prettier', 'plugin:prettier/recommended'],
   rules: {
      'no-console': 'warn',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-filename-extension': 'off',
   },
};
