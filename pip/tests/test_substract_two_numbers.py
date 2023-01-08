import unittest

from codinasion_tools.substract_two_numbers import SubstractTwoNumbers


class TestSubstractTwoNumbers(unittest.TestCase):
    def test_substract_two_numbers(self):
        self.assertEqual(SubstractTwoNumbers(7, 6), 1)
        self.assertEqual(SubstractTwoNumbers(7, 7), 0)
        self.assertEqual(SubstractTwoNumbers(7, 8), -1)


if __name__ == "__main__":
    unittest.main()
