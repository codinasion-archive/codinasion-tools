import convertDecimalToBinary from '../index';

describe('convertDecimalToBinary', () => {
  it('should return 0 when input is 0', () => {
    expect(convertDecimalToBinary(0)).toBe('0');
  });

  it('should return 1001 when input is 9', () => {
    expect(convertDecimalToBinary(9)).toBe('1001');
  });
});
