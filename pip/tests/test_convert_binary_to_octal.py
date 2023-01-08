import unittest

from codinasion_tools.convert_binary_to_octal import ConvertBinaryToOctal


class TestConvertBinaryToOctal(unittest.TestCase):
    def test_convert_binary_to_octal(self):
        self.assertEqual(ConvertBinaryToOctal("0"), 0)
        self.assertEqual(ConvertBinaryToOctal("101"), 5)
        self.assertEqual(ConvertBinaryToOctal("1001"), 11)
        self.assertEqual(ConvertBinaryToOctal("100101"), 45)


if __name__ == "__main__":
    unittest.main()
