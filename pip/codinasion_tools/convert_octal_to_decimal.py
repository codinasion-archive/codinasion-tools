def ConvertOctalToDecimal(octal: int) -> int:
    """Convert an octal number to a decimal number."""
    octal = str(octal)
    decimal = 0
    for i in range(len(octal)):
        decimal = decimal * 8 + int(octal[i])
    return decimal
