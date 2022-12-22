import ConvertDaysToMinutes from '../index';

describe('ConvertDaysToMinutes', () => {
  it('should convert days to minutes', () => {
    expect(ConvertDaysToMinutes(1)).toBe(1440);
    expect(ConvertDaysToMinutes(0)).toBe(0);
  });
});
