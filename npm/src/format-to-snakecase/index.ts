export default function FormatToSnakeCase(str: string): string {
  return str
    .split(/[-_ ]/)
    .map((word) => {
      return word.toLowerCase();
    })
    .join('_');
}
