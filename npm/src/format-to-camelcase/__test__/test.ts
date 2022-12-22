import FormatToCamelCase from '../index';

test('FormatToCamelCase', () => {
  expect(FormatToCamelCase('foo-bar')).toBe('fooBar');
  expect(FormatToCamelCase('foo bar_baz-foo bar-baz')).toBe('fooBarBazFooBarBaz');
});
