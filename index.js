module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['import', 'sort-imports-es6-autofix', 'prettier', 'jsdoc'],
  extends: ['prettier'],
  rules: {
    'block-scoped-var': 'error',
    curly: 'error',
    'default-case': 'error',
    'import/no-unresolved': ['error', {commonjs: true}],
    'import/named': 'error',
    'import/default': 'error',
    'import/extensions': ['error', 'always', {ignorePackages: true}],

    // validity
    'jsdoc/check-access': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    // "jsdoc/check-syntax": 'error', // the mode is 'typescript' and it errors for closure syntax
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['api', 'observable'],
      },
    ],
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/no-bad-blocks': 'error',
    // "jsdoc/no-undefined-types": ['error', { 'definedTypes': ['ol'] }],
    // this fails because of https://github.com/gajus/eslint-plugin-jsdoc/issues/559
    // for main source this should not be needed because tsc already checks it
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error', // this fails because of https://github.com/gajus/eslint-plugin-jsdoc/issues/686
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
    // "jsdoc/valid-types": 'error', // this fails because of https://github.com/jsdoctypeparser/jsdoctypeparser/issues/133
    // for main source this should not be needed because tsc already checks it
    // "jsdoc/check-types": 'error', // for primitives. is aligned with mode 'typescript'. Not needed because of tsc?

    // stylistic
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-examples': 'error',
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],

    // turned off
    // "jsdoc/check-indentation": 'error', // we want indentation in certain cases
    // "jsdoc/check-line-alignment": 'error',
    // "jsdoc/check-values": 'error', // not needed
    // "jsdoc/match-description": 'error', // regex could get adjusted ...
    // "jsdoc/newline-after-description": 'error',
    // "jsdoc/no-defaults": 'error',
    // "jsdoc/no-types": 'error',
    // "jsdoc/require-description": 'error',
    // "jsdoc/require-description-complete-sentence": 'error', // some issues with description starting with line break
    // "jsdoc/require-example": 'error',
    // "jsdoc/require-file-overview": 'error',
    // "jsdoc/require-jsdoc": 'error',
    // "jsdoc/require-throws": 'error',
    // "jsdoc/require-yields": 'error',

    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
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
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'use-isnan': 'error',
    'valid-typeof': 'error',
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
      tagNamePreference: {
        'returns': 'return',
        'constant': 'const',
        'augments': 'extends',
      },
    },
  },
};
