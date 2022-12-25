from .convert_octal_to_decimal import ConvertOctalToDecimal
from .convert_decimal_to_hexadecimal import ConvertDecimalToHexadecimal


def ConvertOctalToHexadecimal(octal: int) -> int:
    """Convert an octal number to a hexadecimal number."""
    if octal == 0:
        return 0
    return int(ConvertDecimalToHexadecimal(ConvertOctalToDecimal(str(octal))))
