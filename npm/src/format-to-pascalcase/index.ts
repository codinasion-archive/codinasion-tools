export default function FormatToPascalCase(input: string): string {
  return input
    .split(/[-_ ]/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}
