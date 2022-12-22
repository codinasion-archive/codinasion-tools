import FormatToConstantCase from '../index';

test('FormatToConstantCase', () => {
  expect(FormatToConstantCase('foo-bar')).toBe('FOO_BAR');
  expect(FormatToConstantCase('foo bar_baz-foo bar-baz')).toBe('FOO_BAR_BAZ_FOO_BAR_BAZ');
});
