import unittest

from codinasion_tools.convert_binary_to_decimal import ConvertBinaryToDecimal


class TestConvertBinaryToDecimal(unittest.TestCase):
    def test_convert_binary_to_decimal(self):
        self.assertEqual(ConvertBinaryToDecimal("10"), 2)
        self.assertEqual(ConvertBinaryToDecimal("1000"), 8)
        self.assertEqual(ConvertBinaryToDecimal("10011"), 19)
        self.assertEqual(ConvertBinaryToDecimal("100001"), 33)


if __name__ == "__main__":
    unittest.main()
