import unittest

from opentoolshub.convert_centimeters_to_inches import ConvertCentimetersToInches


class TestConvertCentimetersToInches(unittest.TestCase):
    def test_convert_centimeters_to_inches(self):
        self.assertEqual(round(ConvertCentimetersToInches(0), 4), 0)
        self.assertEqual(round(ConvertCentimetersToInches(100), 4), 39.3701)
        self.assertEqual(round(ConvertCentimetersToInches(200), 4), 78.7402)
        self.assertEqual(round(ConvertCentimetersToInches(300), 4), 118.1102)


if __name__ == "__main__":
    unittest.main()
