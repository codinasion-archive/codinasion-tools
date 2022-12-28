import unittest

from opentoolshub.convert_octal_to_binary import ConvertOctalToBinary


class TestConvertOctalToBinary(unittest.TestCase):
    def test_convert_octal_to_binary(self):
        self.assertEqual(ConvertOctalToBinary(2), "10")
        self.assertEqual(ConvertOctalToBinary(77), "111111")
        self.assertEqual(ConvertOctalToBinary(14), "1100")
        self.assertEqual(ConvertOctalToBinary(0), "0")


if __name__ == "__main__":
    unittest.main()
