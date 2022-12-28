import ConvertOctalToBinary from '../index';

describe('ConvertOctalToBinary', () => {
  it('should return 111 when input is 7', () => {
    expect(ConvertOctalToBinary(7)).toBe('111');
  });

  it('should return 1011 when input is 13', () => {
    expect(ConvertOctalToBinary(13)).toBe('1011');
  });
});
