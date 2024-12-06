import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  importPlugin.flatConfigs.recommended,
  jsdoc.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      jsdoc: {
        mode: 'typescript',
        preferredTypes: {
          '[]': 'Array<>',
          '.<>': '<>',
          'object': 'Object',
        },
        tagNamePreference: {
          returns: 'return',
          file: 'fileoverview',
          constant: 'const',
          augments: 'extends',
        },
      },
    },
    rules: {
      'block-scoped-var': 'error',
      curly: 'error',
      'default-case': 'error',
      'import/no-unresolved': ['error', {commonjs: true}],
      'import/no-duplicates': 'error',
      'import/named': 'error',
      'import/order': [
        'error',
        {
          named: true,
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'import/default': 'error',
      'import/extensions': ['error', 'always', {ignorePackages: true}],
      'jsdoc/check-access': 'error',
      'jsdoc/check-alignment': 'error',
      // 'jsdoc/check-examples': 'error', // blocked by https://github.com/eslint/eslint/issues/14745
      'jsdoc/check-param-names': 'error',
      'jsdoc/check-property-names': 'error',
      'jsdoc/check-syntax': 'error',
      'jsdoc/check-tag-names': [
        'error',
        {
          definedTags: ['api', 'observable'],
        },
      ],
      'jsdoc/check-types': 'error',
      'jsdoc/empty-tags': 'error',
      'jsdoc/implements-on-classes': 'error',
      'jsdoc/no-bad-blocks': 'error',
      'jsdoc/no-undefined-types': 'off', // allow tsc to handle this
      'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-param': 'error',
      'jsdoc/require-param-description': 'error',
      'jsdoc/require-param-name': 'error',
      'jsdoc/require-param-type': 'error',
      'jsdoc/require-property': 'error',
      'jsdoc/require-property-description': 'error',
      'jsdoc/require-property-name': 'error',
      'jsdoc/require-property-type': 'error',
      'jsdoc/require-returns': 'error',
      'jsdoc/require-returns-check': 'error',
      'jsdoc/require-returns-description': 'error',
      'jsdoc/require-returns-type': 'error',
      'jsdoc/tag-lines': 'off',
      // 'jsdoc/valid-types': 'error', // blocked by https://github.com/jsdoctypeparser/jsdoctypeparser/issues/133
      'no-cond-assign': 'error',
      'no-console': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-else-return': ['error', {allowElseIf: false}],
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-eq-null': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-inner-declarations': ['error', 'functions'],
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-multi-assign': 'error',
      'no-negated-in-lhs': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
      'no-use-before-define': ['error', 'nofunc'],
      'no-var': 'error',
      'prefer-const': 'error',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          bracketSpacing: false,
          quoteProps: 'preserve',
        },
      ],
      'use-isnan': 'error',
      'valid-typeof': 'error',
    },
  },
];
