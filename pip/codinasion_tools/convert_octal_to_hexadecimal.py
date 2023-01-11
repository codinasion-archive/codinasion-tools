from .convert_octal_to_decimal import ConvertOctalToDecimal
from .convert_decimal_to_hexadecimal import ConvertDecimalToHexadecimal


def ConvertOctalToHexadecimal(octal: int) -> str:
    """Convert an octal number to a hexadecimal number."""
    if octal == 0:
        return "0"
    return ConvertDecimalToHexadecimal(ConvertOctalToDecimal(str(octal)))
