import {createRuleTester} from 'eslint-vitest-rule-tester';
import {describe, test} from 'vitest';
import configs from '../../index.js';
import rule from '../../rules/valid-tsdoc.js';

describe('valid-tsdoc', () => {
  const {valid} = createRuleTester({
    name: 'valid-tsdoc',
    rule,
    configs: {
      languageOptions: configs[0].languageOptions,
    },
  });

  test('Array<string>', () => {
    valid({
      filename: 'valid.test.js',
      code: `
        /**
         * @type {Array<string>}
         */
        const foo = ['bar'];
      `,
    });
  });
});
