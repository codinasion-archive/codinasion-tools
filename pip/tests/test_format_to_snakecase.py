import unittest

from opentoolshub.format_to_snakecase import FormatToSnakeCase


class TestFormatToSnakeCase(unittest.TestCase):
    def test_format_to_snakecase(self):
        self.assertEqual(FormatToSnakeCase("hello world"), "hello_world")
        self.assertEqual(FormatToSnakeCase("hello-world"), "hello_world")
        self.assertEqual(FormatToSnakeCase("hello_world"), "hello_world")


if __name__ == "__main__":
    unittest.main()
