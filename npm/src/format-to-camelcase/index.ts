export default function FormatToCamelCase(str: string): string {
  return str
    .split(/[-_ ]/)
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}
