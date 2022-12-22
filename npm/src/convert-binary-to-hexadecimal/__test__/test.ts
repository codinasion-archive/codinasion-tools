import ConvertBinaryToHexadecimal from '../index';

describe('ConvertBinaryToHexadecimal', () => {
  it('should return 0 when input is 0', () => {
    expect(ConvertBinaryToHexadecimal('0')).toBe('0');
  });

  it('should return 9 when input is 1001', () => {
    expect(ConvertBinaryToHexadecimal('1001')).toBe('9');
  });
});
