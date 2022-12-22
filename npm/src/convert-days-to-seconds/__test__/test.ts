import ConvertDaysToSeconds from '../index';

describe('ConvertDaysToSeconds', () => {
  it('should convert days to seconds', () => {
    expect(ConvertDaysToSeconds(1)).toBe(86400);
  });
});
