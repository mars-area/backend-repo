import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'


export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'build/**',
      'src/db/mysql/migrations/*.cjs',
      'src/db/mysql/seeders/*.cjs',
      'babel.config.js',
      'jest.config.js'
    ]
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ]
    }
  }
]