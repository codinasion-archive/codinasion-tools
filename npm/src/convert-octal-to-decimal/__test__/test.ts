import ConvertOctalToDecimal from '../index';

describe('ConvertOctalToDecimal', () => {
  it('should convert octal to decimal', () => {
    expect(ConvertOctalToDecimal(10)).toBe(8);
    expect(ConvertOctalToDecimal(20)).toBe(16);
  });
});
