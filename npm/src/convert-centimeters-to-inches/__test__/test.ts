import ConvertCentimetersToInches from '../index';

describe('ConvertCentimetersToInches', () => {
  it('should convert centimeters to inches', () => {
    expect(ConvertCentimetersToInches(100)).toBe(39.37);
    expect(ConvertCentimetersToInches(0)).toBe(0);
  });
});
