def ConvertDecimalToHexadecimal(decimal_number: int) -> str:
    """Convert a decimal number to a hexadecimal number."""
    hexadecimal_number = ""
    while decimal_number > 0:
        remainder = decimal_number % 16
        if remainder < 10:
            hexadecimal_number = str(remainder) + hexadecimal_number
        else:
            hexadecimal_number = chr(remainder + 55) + hexadecimal_number
        decimal_number = decimal_number // 16
    if hexadecimal_number == "":
        hexadecimal_number = "0"
    return hexadecimal_number
