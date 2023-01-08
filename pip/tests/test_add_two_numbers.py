import unittest

from codinasion_tools.add_two_numbers import AddTwoNumbers


class TestAddTwoNumbers(unittest.TestCase):
    def test_add_two_numbers(self):
        self.assertEqual(AddTwoNumbers(1, 2), 3)
        self.assertEqual(AddTwoNumbers(2, 2), 4)


if __name__ == "__main__":
    unittest.main()
