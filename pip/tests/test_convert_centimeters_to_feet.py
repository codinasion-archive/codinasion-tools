import unittest

from opentoolshub.convert_centimeters_to_feet import ConvertCentimetersToFeet


class TestConvertCentimetersToFeet(unittest.TestCase):
    def test_convert_centimeters_to_feet(self):
        self.assertEqual(round(ConvertCentimetersToFeet(0), 4), 0)
        self.assertEqual(round(ConvertCentimetersToFeet(100), 4), 3.2808)
        self.assertEqual(round(ConvertCentimetersToFeet(200), 4), 6.5617)
        self.assertEqual(round(ConvertCentimetersToFeet(300), 4), 9.8425)


if __name__ == "__main__":
    unittest.main()
