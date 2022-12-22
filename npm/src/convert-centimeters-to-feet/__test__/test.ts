import ConvertCentimetersToFeet from '../index';

describe('ConvertCentimetersToFeet', () => {
  it('should convert centimeters to feet', () => {
    expect(ConvertCentimetersToFeet(100)).toBe(3.28);
    expect(ConvertCentimetersToFeet(0)).toBe(0);
  });
});
