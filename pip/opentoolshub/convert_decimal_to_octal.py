def ConvertDecimalToOctal(decimal: int) -> int:
    """Convert a decimal number to an octal number."""
    octal = 0
    i = 1
    while decimal != 0:
        octal += (decimal % 8) * i
        decimal //= 8
        i *= 10
    return octal
