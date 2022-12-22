import ConvertHexadecimalToDecimal from '../index';

describe('ConvertHexadecimalToDecimal', () => {
  it('should convert hexadecimal to decimal', () => {
    expect(ConvertHexadecimalToDecimal('a')).toBe(10);
    expect(ConvertHexadecimalToDecimal('ff')).toBe(255);
  });
});
