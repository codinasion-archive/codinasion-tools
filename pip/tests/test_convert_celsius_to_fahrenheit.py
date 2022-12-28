import unittest

from opentoolshub.convert_celsius_to_fahrenheit import ConvertCelsiusToFahrenheit


class TestConvertCelsiusToFahrenheit(unittest.TestCase):
    def test_convert_celsius_to_fahrenheit(self):
        self.assertEqual(ConvertCelsiusToFahrenheit(0), 32)
        self.assertEqual(ConvertCelsiusToFahrenheit(100), 212)
        self.assertEqual(ConvertCelsiusToFahrenheit(37), 98.6)
        self.assertEqual(ConvertCelsiusToFahrenheit(-40), -40)
        self.assertEqual(ConvertCelsiusToFahrenheit(40), 104)


if __name__ == "__main__":
    unittest.main()
