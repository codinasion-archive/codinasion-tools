export default function ConvertBinaryToHexadecimal(binary: string): string {
  return parseInt(binary, 2).toString(16);
}
