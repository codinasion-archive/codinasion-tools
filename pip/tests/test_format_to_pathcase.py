import unittest

from opentoolshub.format_to_pathcase import FormatToPathCase


class TestFormatToPathCase(unittest.TestCase):
    def test_format_to_pathcase(self):
        self.assertEqual(FormatToPathCase("hello world"), "hello/world")
        self.assertEqual(FormatToPathCase("hello-world"), "hello/world")
        self.assertEqual(FormatToPathCase("hello_world"), "hello/world")


if __name__ == "__main__":
    unittest.main()
