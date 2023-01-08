import unittest

from codinasion_tools.convert_decimal_to_hexadecimal import ConvertDecimalToHexadecimal


class TestConvertDecimalToHexadecimal(unittest.TestCase):
    def test_convert_decimal_to_hexadecimal(self):
        self.assertEqual(ConvertDecimalToHexadecimal(2), "2")
        self.assertEqual(ConvertDecimalToHexadecimal(8), "8")
        self.assertEqual(ConvertDecimalToHexadecimal(19), "13")
        self.assertEqual(ConvertDecimalToHexadecimal(33), "21")


if __name__ == "__main__":
    unittest.main()
