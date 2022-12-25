def FormatToDotCase(string: str) -> str:
    """Converts a string to dot.case.

    Args:
        string: str. The string to be converted.

    Returns:
        str. The converted string.
    """
    string = string.replace(" ", "_").replace("-", "_")
    return string.replace("_", ".").lower()
