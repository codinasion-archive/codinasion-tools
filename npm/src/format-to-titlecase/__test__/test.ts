import FormatToTitleCase from '../index';

test('FormatToTitleCase', () => {
  expect(FormatToTitleCase('foo bar-baz_qux quux')).toBe('Foo Bar Baz Qux Quux');
  expect(FormatToTitleCase('foo bar-baz_qux_sdf-quux')).toBe('Foo Bar Baz Qux Sdf Quux');
});
