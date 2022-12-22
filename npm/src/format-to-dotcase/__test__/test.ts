import FormatToDotcase from '../index';

test('FormatToDotcase', () => {
  expect(FormatToDotcase('foo-bar')).toBe('foo.bar');
  expect(FormatToDotcase('foo bar_baz-foo bar-baz')).toBe('foo.bar.baz.foo.bar.baz');
});
