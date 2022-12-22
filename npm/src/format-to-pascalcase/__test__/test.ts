import FormatToPascalCase from '../index';

test('FormatToPascalCase', () => {
  expect(FormatToPascalCase('foo-bar')).toBe('FooBar');
  expect(FormatToPascalCase('foo bar_baz-foo bar-baz')).toBe('FooBarBazFooBarBaz');
});
