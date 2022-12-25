import ConvertBinaryToOctal from '../index';

describe('ConvertBinaryToOctal', () => {
  it('should convert binary to octal', () => {
    expect(ConvertBinaryToOctal('1000')).toEqual(10);
    expect(ConvertBinaryToOctal('100000')).toEqual(40);
  });
});
