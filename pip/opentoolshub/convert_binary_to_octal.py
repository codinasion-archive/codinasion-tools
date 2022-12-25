def ConvertBinaryToOctal(binary: str) -> int:
    """Convert a binary number to an octal number."""
    octal = 0
    for i, digit in enumerate(binary[::-1]):
        octal += int(digit) * 2**i
    return octal


print(ConvertBinaryToOctal("1001"))
