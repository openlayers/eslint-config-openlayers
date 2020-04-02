const obj = {
  'bar': 'foo',
};

export function foo() {
  // This is a legacy style from a time when Closure Compiler would mangle property names.
  // TODO: Confirm this is still needed and remove the `quoteProps: 'preserve'`
  // option for prettier if not.
  return obj['bar'];
}
