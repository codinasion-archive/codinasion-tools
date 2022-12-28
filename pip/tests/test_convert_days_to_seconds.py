import unittest

from opentoolshub.convert_days_to_seconds import ConvertDaysToSeconds


class TestConvertDaysToSeconds(unittest.TestCase):
    def test_convert_days_to_seconds(self):
        self.assertEqual(ConvertDaysToSeconds(1), 86400)
        self.assertEqual(ConvertDaysToSeconds(2), 172800)
        self.assertEqual(ConvertDaysToSeconds(3), 259200)
        self.assertEqual(ConvertDaysToSeconds(4), 345600)


if __name__ == "__main__":
    unittest.main()
