module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'plugin:jsdoc/recommended'],
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin', 'typescript-sort-keys'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': [2],
        '@typescript-eslint/no-use-before-define': [1],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/quotes': [
          2,
          'backtick',
          {
            avoidEscape: true
          }
        ],
        'no-unused-vars': 0,
        'no-use-before-define': [0],
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'jsdoc',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'prettier',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'react-hooks'
  ],
  rules: {
    '@typescript-eslint/ban-types': [0],
    camelcase: 0,
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'default-case': 0,
    'global-require': 0,
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-dynamic-require': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        aspects: ['invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight']
      }
    ],
    'no-shadow': 0,
    'prettier/prettier': [
      2,
      {
        trailingComma: 'none'
      }
    ],
    quotes: 0,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-filename-extension': 0,
    'react/jsx-key': 2,
    'react/jsx-props-no-spreading': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^@?\\w'],
          ['@/'],
          ['(?=.*.interface$)'],
          ['(?=.*.const$)'],
          ['(?=.*.spec$)'],
          [
            '^\\u0000',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$'
          ]
        ]
      }
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        caseSensitive: false
      }
    ],
    'sort-imports': 0,
    'sort-keys-fix/sort-keys-fix': 2
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '.'
      }
    },
    react: {
      version: 'detect'
    }
  }
};
