import unittest

from opentoolshub.convert_decimal_to_octal import ConvertDecimalToOctal


class TestConvertDecimalToOctal(unittest.TestCase):
    def test_convert_decimal_to_octal(self):
        self.assertEqual(ConvertDecimalToOctal(2), 2)
        self.assertEqual(ConvertDecimalToOctal(8), 10)
        self.assertEqual(ConvertDecimalToOctal(19), 23)
        self.assertEqual(ConvertDecimalToOctal(33), 41)


if __name__ == "__main__":
    unittest.main()
