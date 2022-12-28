import ConvertOctalToHexadecimal from '../index';

describe('ConvertOctalToHexadecimal', () => {
  it('should return 0 when input is 0', () => {
    expect(ConvertOctalToHexadecimal(0)).toBe('0');
  });

  it('should return 1f when input is 37', () => {
    expect(ConvertOctalToHexadecimal(37)).toBe('1f');
  });
});
