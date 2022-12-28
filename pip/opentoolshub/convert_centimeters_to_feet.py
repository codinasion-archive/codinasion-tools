def ConvertCentimetersToFeet(centimeters: float) -> float:
    """Convert a length in centimeters to feet."""
    inches = centimeters / 2.54
    feet = inches / 12
    return feet
