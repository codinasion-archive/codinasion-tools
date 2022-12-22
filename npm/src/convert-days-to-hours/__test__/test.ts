import ConvertDaysToHours from '../index';

describe('ConvertDaysToHours', () => {
  it('should convert days to hours', () => {
    expect(ConvertDaysToHours(1)).toBe(24);
    expect(ConvertDaysToHours(0)).toBe(0);
  });
});
