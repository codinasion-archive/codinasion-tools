def ConvertHexadecimalToBinary(hexadecimal: str) -> str:
    """Convert a hexadecimal number to a binary number."""
    binary = bin(int(hexadecimal, 16))
    return binary[2:]
