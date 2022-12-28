def ConvertHexadecimalToDecimal(hexadecimal: str) -> int:
    """Convert a hexadecimal number to a decimal number."""
    decimal = 0
    for i in range(len(hexadecimal)):
        decimal += int(hexadecimal[i], 16) * 16 ** (len(hexadecimal) - i - 1)
    return decimal
