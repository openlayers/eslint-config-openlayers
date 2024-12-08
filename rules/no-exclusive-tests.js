/**
 * @fileoverview Generates an error if describe.only() or it.only() is found.
 */
import minimatch from 'minimatch';

const names = {
  describe: true,
  it: true,
};

const only = 'only';

export default {
  meta: {
    type: 'problem',

    docs: {
      description:
        'generates an error if a test file calls describe.only() or it.only()',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          include: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: function (context) {
    return {
      CallExpression(node) {
        if (node.callee.type !== 'MemberExpression') {
          return;
        }

        const filename = context.getFilename();
        const include = context.options.include || '**/*.test.js';
        if (!minimatch(filename, include)) {
          return;
        }

        const object = node.callee.object;
        const property = node.callee.property;
        if (
          object.type === 'Identifier' &&
          object.name in names &&
          property.type === 'Identifier' &&
          property.name === only
        ) {
          return context.report({
            node: property,
            message: 'Exlusive tests are not allowed',
          });
        }
      },
    };
  },
};
