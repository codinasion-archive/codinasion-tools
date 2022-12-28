def ConvertBinaryToDecimal(binary: str) -> int:
    """Convert a binary number to a decimal number."""
    decimal = 0
    for digit in binary:
        decimal = decimal * 2 + int(digit)
    return decimal
