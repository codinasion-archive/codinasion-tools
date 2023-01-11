def ConvertHexadecimalToDecimal(hexadecimal: str) -> int:
    """Convert a hexadecimal number to a decimal number."""
    decimal = 0
    for i in range(len(hexadecimal)):
        digit = int(hexadecimal[i], 16)
        decimal += digit * 16 ** (len(hexadecimal) - i - 1)
    return decimal
