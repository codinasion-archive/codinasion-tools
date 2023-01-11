from .convert_binary_to_decimal import ConvertBinaryToDecimal


def ConvertBinaryToHexadecimal(binary: str) -> str:
    """Convert a binary number to a hexadecimal number."""
    decimal = ConvertBinaryToDecimal(binary)
    hexadecimal = ""
    while decimal > 0:
        remainder = decimal % 16
        if remainder < 10:
            hexadecimal = str(remainder) + hexadecimal
        else:
            hexadecimal = chr(ord("A") + remainder - 10) + hexadecimal
        decimal = decimal // 16
    return hexadecimal
