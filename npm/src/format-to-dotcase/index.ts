export default function FormatToDotCase(str: string): string {
  return str.split(/[-_ ]/).join('.');
}
