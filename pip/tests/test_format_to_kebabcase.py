import unittest

from opentoolshub.format_to_kebabcase import FormatToKebabCase


class TestFormatToKebabCase(unittest.TestCase):
    def test_format_to_kebabcase(self):
        self.assertEqual(FormatToKebabCase("hello world"), "hello-world")
        self.assertEqual(FormatToKebabCase("hello-world"), "hello-world")
        self.assertEqual(FormatToKebabCase("hello_world"), "hello-world")


if __name__ == "__main__":
    unittest.main()
