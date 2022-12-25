def ConvertDecimalToBinary(decimal: int) -> str:
    """Convert a decimal number to a binary number."""
    binary = ""
    while decimal > 0:
        binary += str(decimal % 2)
        decimal //= 2
    return binary[::-1]
