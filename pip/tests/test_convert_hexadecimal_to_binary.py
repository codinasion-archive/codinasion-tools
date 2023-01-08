import unittest

from codinasion_tools.convert_hexadecimal_to_binary import ConvertHexadecimalToBinary


class TestConvertHexadecimalToBinary(unittest.TestCase):
    def test_hexadecimal_to_binary(self):
        self.assertEqual(ConvertHexadecimalToBinary("2"), "10")
        self.assertEqual(ConvertHexadecimalToBinary("8"), "1000")
        self.assertEqual(ConvertHexadecimalToBinary("13"), "10011")
        self.assertEqual(ConvertHexadecimalToBinary("21"), "100001")


if __name__ == "__main__":
    unittest.main()
