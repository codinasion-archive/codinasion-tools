import unittest

from codinasion_tools.format_to_camelcase import FormatToCamelCase


class TestFormatToCamelCase(unittest.TestCase):
    def test_format_to_camelcase(self):
        self.assertEqual(FormatToCamelCase("hello world"), "helloWorld")
        self.assertEqual(FormatToCamelCase("hello-world"), "helloWorld")
        self.assertEqual(FormatToCamelCase("hello_world"), "helloWorld")


if __name__ == "__main__":
    unittest.main()
