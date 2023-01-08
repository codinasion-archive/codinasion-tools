import unittest

from codinasion_tools.convert_hexadecimal_to_octal import ConvertHexadecimalToOctal


class TestConvertHexadecimalToOctal(unittest.TestCase):
    def test_convert_hexadecimal_to_octal(self):
        self.assertEqual(ConvertHexadecimalToOctal("2"), 2)
        self.assertEqual(ConvertHexadecimalToOctal("8"), 10)
        self.assertEqual(ConvertHexadecimalToOctal("13"), 23)
        self.assertEqual(ConvertHexadecimalToOctal("21"), 41)


if __name__ == "__main__":
    unittest.main()
