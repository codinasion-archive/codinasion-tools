import unittest

from opentoolshub.convert_days_to_hours import ConvertDaysToHours


class TestConvertDaysToHours(unittest.TestCase):
    def test_convert_days_to_hours(self):
        self.assertEqual(ConvertDaysToHours(1), 24)
        self.assertEqual(ConvertDaysToHours(4), 96)
        self.assertEqual(ConvertDaysToHours(11), 264)
        self.assertEqual(ConvertDaysToHours(19), 456)


if __name__ == "__main__":
    unittest.main()
