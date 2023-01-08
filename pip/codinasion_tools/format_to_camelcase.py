def FormatToCamelCase(s: str) -> str:
    """Converts a string to camel case.

    Args:
      s: The string to convert.

    Returns:
      The string in camel case.
    """
    s = s.replace(" ", "_").replace("-", "_")
    words = s.split("_")
    camel_case = words[0].lower()
    for word in words[1:]:
        camel_case += word.capitalize()
    return camel_case
