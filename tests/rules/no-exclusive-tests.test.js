import {createRuleTester} from 'eslint-vitest-rule-tester';
import {describe, expect, test} from 'vitest';
import configs from '../../index.js';
import rule from '../../rules/no-exclusive-tests.js';

describe('no-exclusive-tests', () => {
  const {valid, invalid} = createRuleTester({
    name: 'no-exclusive-tests',
    rule,
    configs: {
      languageOptions: configs[0].languageOptions,
    },
  });

  test('valid use of "describe()" and "it()"', () => {
    valid({
      filename: 'valid.test.js',
      code: `
        describe('some functionality', () => {
          it('works', () => {
            alert('woohoo');
          });
        });
      `,
    });
  });

  test('valid use of "describe.only.notACallExpression"', () => {
    valid({
      filename: 'valid.test.js',
      code: `
        describe.only.notACallExpression = 'ok';
      `,
    });
  });

  test('invalid use of "describe.only()"', () => {
    const result = invalid({
      filename: 'invalid.test.js',
      code: `
        describe.only('example invalid use of "describe.only()"', () => {
          it('example valid use of "it()"', () => {
            alert('invalid');
          });
        });
      `,
    });

    expect(result.messages).toMatchSnapshot();
  });

  test('invalid use of "it.only()"', () => {
    const result = invalid({
      filename: 'invalid.test.js',
      code: `
        describe('example valid use of "describe()"', () => {
          it.only('example invalid use of "it.only()"', () => {
            alert('invalid');
          });
        });
      `,
    });

    expect(result.messages).toMatchSnapshot();
  });

  test('invalid use of "describe.only()" and "it.only()"', () => {
    const result = invalid({
      filename: 'invalid.test.js',
      code: `
        describe.only('example invalid use of "describe.only()"', () => {
          it.only('example invalid use of "it.only()"', () => {
            alert('invalid');
          });
        });
      `,
    });

    expect(result.messages).toMatchSnapshot();
  });
});
