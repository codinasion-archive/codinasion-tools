export default function FormatToKebabCase(str: string): string {
  return str.split(/[-_ ]/).join('-');
}
