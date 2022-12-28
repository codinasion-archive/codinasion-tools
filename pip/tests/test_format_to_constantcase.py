import unittest

from opentoolshub.format_to_constantcase import FormatToConstantCase


class TestFormatToConstantCase(unittest.TestCase):
    def test_format_to_constantcase(self):
        self.assertEqual(FormatToConstantCase("hello world"), "HELLO_WORLD")
        self.assertEqual(FormatToConstantCase("hello-world"), "HELLO_WORLD")
        self.assertEqual(FormatToConstantCase("hello_world"), "HELLO_WORLD")


if __name__ == "__main__":
    unittest.main()
