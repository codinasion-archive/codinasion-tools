import unittest

from opentoolshub.format_to_titlecase import FormatToTitleCase


class TestFormatToTitleCase(unittest.TestCase):
    def test_format_to_titlecase(self):
        self.assertEqual(FormatToTitleCase("hello world"), "Hello World")
        self.assertEqual(FormatToTitleCase("hello-world"), "Hello World")
        self.assertEqual(FormatToTitleCase("hello_world"), "Hello World")


if __name__ == "__main__":
    unittest.main()
