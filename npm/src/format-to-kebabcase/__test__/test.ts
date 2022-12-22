import FormatToKebabCase from '../index';

test('FormatToKebabCase', () => {
  expect(FormatToKebabCase('foo-bar')).toBe('foo-bar');
  expect(FormatToKebabCase('foo bar_baz-foo bar-baz')).toBe('foo-bar-baz-foo-bar-baz');
});
