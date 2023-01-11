from .convert_octal_to_decimal import ConvertOctalToDecimal
from .convert_decimal_to_binary import ConvertDecimalToBinary


def ConvertOctalToBinary(octal_num: int) -> str:
    """Convert an octal number to a binary number."""
    if octal_num == 0:
        return "0"
    return ConvertDecimalToBinary(ConvertOctalToDecimal(octal_num))
