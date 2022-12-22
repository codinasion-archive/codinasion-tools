export default function FormatToTitleCase(input: string): string {
  return input
    .split(/[-_ ]/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
