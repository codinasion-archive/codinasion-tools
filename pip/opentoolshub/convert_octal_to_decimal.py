def ConvertOctalToDecimal(octal: str) -> int:
    """Convert an octal number to a decimal number."""
    decimal = 0
    for i in range(len(octal)):
        decimal = decimal * 8 + int(octal[i])
    return decimal
