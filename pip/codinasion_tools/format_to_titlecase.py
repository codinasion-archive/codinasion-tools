def FormatToTitleCase(text: str) -> str:
    """Converts a string to title case, with some exceptions.

    Args:
        text: str. The string to be converted.

    Returns:
        str. The converted string.
    """
    text = text.replace(" ", "_").replace("-", "_")
    return text.replace("_", " ").title()
