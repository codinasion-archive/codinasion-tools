import ConvertCelsiusToFahrenheit from '../index';

describe('ConvertCelsiusToFahrenheit', () => {
  it('should convert celsius to fahrenheit', () => {
    expect(ConvertCelsiusToFahrenheit(37)).toBe(98.6);
    expect(ConvertCelsiusToFahrenheit(-40)).toBe(-40);
  });
});
