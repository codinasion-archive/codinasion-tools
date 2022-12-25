from .convert_binary_to_decimal import ConvertBinaryToDecimal


def ConvertBinaryToHexadecimal(binary: str) -> str:
    """Convert a binary number to a hexadecimal number."""
    decimal = ConvertBinaryToDecimal(binary)
    hexadecimal = ""
    while decimal > 0:
        hexadecimal = str(decimal % 16) + hexadecimal
        decimal = decimal // 16
    return hexadecimal
