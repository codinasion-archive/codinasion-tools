import unittest

from codinasion_tools.format_to_dotcase import FormatToDotCase


class TestFormatToDotCase(unittest.TestCase):
    def test_format_to_dotcase(self):
        self.assertEqual(FormatToDotCase("hello world"), "hello.world")
        self.assertEqual(FormatToDotCase("hello-world"), "hello.world")
        self.assertEqual(FormatToDotCase("hello_world"), "hello.world")


if __name__ == "__main__":
    unittest.main()
