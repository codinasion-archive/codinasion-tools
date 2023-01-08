def FormatToConstantCase(s: str) -> str:
    """Converts a string to constant case.

    Args:
        s: The string to convert.

    Returns:
        The string in constant case.
    """
    s = s.replace(" ", "_").replace("-", "_")
    return "_".join([x.upper() for x in s.split("_")])
