import unittest

from codinasion_tools.convert_binary_to_hexadecimal import ConvertBinaryToHexadecimal


class TestConvertBinaryToHexadecimal(unittest.TestCase):
    def test_convert_binary_to_hexadecimal(self):
        self.assertEqual(ConvertBinaryToHexadecimal("10"), "2")
        self.assertEqual(ConvertBinaryToHexadecimal("1010"), "A")
        self.assertEqual(ConvertBinaryToHexadecimal("10011"), "13")
        self.assertEqual(ConvertBinaryToHexadecimal("100001"), "21")


if __name__ == "__main__":
    unittest.main()
