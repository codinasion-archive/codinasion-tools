import ConvertDecimalToOctal from '../index';

describe('ConvertDecimalToOctal', () => {
  it('should convert decimal to octal', () => {
    expect(ConvertDecimalToOctal(10)).toEqual(12);
    expect(ConvertDecimalToOctal(40)).toEqual(50);
  });
});
