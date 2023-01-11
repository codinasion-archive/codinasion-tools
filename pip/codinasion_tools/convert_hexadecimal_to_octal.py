def ConvertHexadecimalToOctal(hexadecimal: str) -> int:
    """Convert a hexadecimal number to an octal number."""
    hexadecimal = hexadecimal.upper()
    decimal = 0
    for i in range(len(hexadecimal)):
        decimal = decimal * 16 + int(hexadecimal[i], 16)
    octal = ""
    while decimal != 0:
        octal = str(decimal % 8) + octal
        decimal = decimal // 8
    if octal == "":
        octal = "0"
    return int(octal)
