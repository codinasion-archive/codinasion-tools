import unittest

from opentoolshub.convert_days_to_minutes import ConvertDaysToMinutes


class TestConvertDaysToMinutes(unittest.TestCase):
    def test_convert_days_to_minutes(self):
        self.assertEqual(ConvertDaysToMinutes(1), 1440)
        self.assertEqual(ConvertDaysToMinutes(4), 5760)
        self.assertEqual(ConvertDaysToMinutes(11), 15840)
        self.assertEqual(ConvertDaysToMinutes(19), 27360)


if __name__ == "__main__":
    unittest.main()
