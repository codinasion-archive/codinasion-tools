import unittest

from opentoolshub.convert_hexadecimal_to_decimal import ConvertHexadecimalToDecimal


class TestConvertHexadecimalToDecimal(unittest.TestCase):
    def test_convert_hexadecimal_to_decimal(self):
        self.assertEqual(ConvertHexadecimalToDecimal("2"), 2)
        self.assertEqual(ConvertHexadecimalToDecimal("8"), 8)
        self.assertEqual(ConvertHexadecimalToDecimal("13"), 19)
        self.assertEqual(ConvertHexadecimalToDecimal("21"), 33)


if __name__ == "__main__":
    unittest.main()
