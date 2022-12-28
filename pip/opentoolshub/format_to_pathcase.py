def FormatToPathCase(s: str) -> str:
    """Converts a string to path case.

    Args:
        s: string to be converted.

    Returns:
        s converted to path case.
    """
    s = s.replace(" ", "_").replace("-", "_")
    return s.replace("_", "/").lower()
