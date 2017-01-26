module.exports = {
  env: {
    node: true,
    browser: true
  },
  rules: {
    'array-bracket-spacing': 2,
    'block-scoped-var': 2,
    'brace-style': 2,
    'comma-dangle': [2, 'never'],
    'comma-spacing': 2,
    'comma-style': 2,
    'curly': 2,
    'default-case': 2,
    'eol-last': 2,
    'indent': [2, 2, {VariableDeclarator: 2, SwitchCase: 1}],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'no-cond-assign': 2,
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eq-null': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-mixed-spaces-and-tabs': [2, false],
    'no-multiple-empty-lines': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unused-vars': [2, {vars: 'all', args: 'none'}],
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': 2,
    'quotes': [2, 'single'],
    'semi': 2,
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'use-isnan': 2,
    'valid-jsdoc': [2, {
      requireReturn: false
    }],
    'valid-typeof': 2
  }
};
