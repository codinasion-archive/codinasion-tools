import re


def FormatToSnakeCase(string: str) -> str:
    """Converts a string to snake case.

    Args:
        string: str. The string to be converted.

    Returns:
        str. The converted string.
    """
    string = string.replace(" ", "_").replace("-", "_")
    string = re.sub(r"(.)([A-Z][a-z]+)", r"\1_\2", string)
    return re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", string).lower()
