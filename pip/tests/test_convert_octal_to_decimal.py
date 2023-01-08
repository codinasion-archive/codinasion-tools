import unittest

from codinasion_tools.convert_octal_to_decimal import ConvertOctalToDecimal


class TestConvertOctalToDecimal(unittest.TestCase):
    def test_convert_octal_to_decimal(self):
        self.assertEqual(ConvertOctalToDecimal("2"), 2)
        self.assertEqual(ConvertOctalToDecimal("10"), 8)
        self.assertEqual(ConvertOctalToDecimal("23"), 19)
        self.assertEqual(ConvertOctalToDecimal("41"), 33)


if __name__ == "__main__":
    unittest.main()
