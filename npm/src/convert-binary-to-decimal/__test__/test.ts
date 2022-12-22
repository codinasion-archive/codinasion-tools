import ConvertBinaryToDecimal from '../index';

describe('ConvertBinaryToDecimal', () => {
  it('should return 0 when input is 0', () => {
    expect(ConvertBinaryToDecimal('0')).toBe(0);
  });

  it('should return 9 when input is 1001', () => {
    expect(ConvertBinaryToDecimal('1001')).toBe(9);
  });
});
