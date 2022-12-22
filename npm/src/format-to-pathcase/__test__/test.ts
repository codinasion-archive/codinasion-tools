import FormatToPathCase from '../index';

test('FormatToPathCase', () => {
  expect(FormatToPathCase('foo bar-baz_qux quux')).toBe('foo/bar/baz/qux/quux');
  expect(FormatToPathCase('foo bar-baz_qux_sdf-quux')).toBe('foo/bar/baz/qux/sdf/quux');
});
