import ConvertDecimalToHexadecimal from '../index';

describe('ConvertDecimalToHexadecimal', () => {
  it('should convert decimal to hexadecimal', () => {
    expect(ConvertDecimalToHexadecimal(11)).toBe('b');
    expect(ConvertDecimalToHexadecimal(31)).toBe('1f');
  });
});
