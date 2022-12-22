export default function FormatToConstantCase(str: string): string {
  return str
    .split(/[-_ ]+/)
    .map((word) => word.toUpperCase())
    .join('_');
}
