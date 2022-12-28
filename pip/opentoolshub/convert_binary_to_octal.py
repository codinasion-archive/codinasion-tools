def ConvertBinaryToOctal(binary: str) -> int:
    """Convert a binary number to an octal number."""
    octal = int(binary, 2)
    octal_str = oct(octal)
    return int(octal_str[2:])
