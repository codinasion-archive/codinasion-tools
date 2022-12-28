import unittest

from opentoolshub.convert_octal_to_hexadecimal import ConvertOctalToHexadecimal


class TestConvertOctalToHexadecimal(unittest.TestCase):
    def test_convert_octal_to_hexadecimal(self):
        self.assertEqual(ConvertOctalToHexadecimal(2), "2")
        self.assertEqual(ConvertOctalToHexadecimal(10), "8")
        self.assertEqual(ConvertOctalToHexadecimal(23), "13")
        self.assertEqual(ConvertOctalToHexadecimal(41), "21")


if __name__ == "__main__":
    unittest.main()
