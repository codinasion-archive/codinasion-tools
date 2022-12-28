import unittest

from opentoolshub.convert_decimal_to_binary import ConvertDecimalToBinary


class TestConvertDecimalToBinary(unittest.TestCase):
    def test_convert_decimal_to_binary(self):
        self.assertEqual(ConvertDecimalToBinary(2), "10")
        self.assertEqual(ConvertDecimalToBinary(8), "1000")
        self.assertEqual(ConvertDecimalToBinary(19), "10011")
        self.assertEqual(ConvertDecimalToBinary(33), "100001")


if __name__ == "__main__":
    unittest.main()
