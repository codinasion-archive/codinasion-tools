import ConvertHexadecimalToBinary from '../index';

describe('ConvertHexadecimalToBinary', () => {
  it('should convert hexadecimal to binary', () => {
    expect(ConvertHexadecimalToBinary('1')).toBe('0001');
    expect(ConvertHexadecimalToBinary('E')).toBe('1110');
  });
});
