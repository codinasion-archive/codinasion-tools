import ConvertHexadecimalToOctal from '../index';

describe('ConvertHexadecimalToOctal', () => {
  it('should convert hexadecimal to octal', () => {
    expect(ConvertHexadecimalToOctal('a')).toBe(12);
    expect(ConvertHexadecimalToOctal('1f')).toBe(37);
  });
});
