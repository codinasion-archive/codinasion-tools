def FormatToPascalCase(text: str) -> str:
    """Converts a string to PascalCase.

    Args:
        text: The string to convert.

    Returns:
        The PascalCase version of the string.
    """
    text = text.replace(" ", "_").replace("-", "_")
    words = text.split("_")
    pascal_case = words[0].capitalize()
    for word in words[1:]:
        pascal_case += word.capitalize()
    return pascal_case
