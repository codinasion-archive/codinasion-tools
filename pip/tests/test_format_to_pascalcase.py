import unittest

from opentoolshub.format_to_pascalcase import FormatToPascalCase


class TestFormatToPascalCase(unittest.TestCase):
    def test_format_to_pascalcase(self):
        self.assertEqual(FormatToPascalCase("hello world"), "HelloWorld")
        self.assertEqual(FormatToPascalCase("hello-world"), "HelloWorld")
        self.assertEqual(FormatToPascalCase("hello_world"), "HelloWorld")


if __name__ == "__main__":
    unittest.main()
