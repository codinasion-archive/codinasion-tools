import FormatToSnakecase from '../index';

test('FormatToSnakecase', () => {
  expect(FormatToSnakecase('foo bar-baz_qux quux')).toBe('foo_bar_baz_qux_quux');
  expect(FormatToSnakecase('foo bar-baz_qux_sdf-quux')).toBe('foo_bar_baz_qux_sdf_quux');
});
