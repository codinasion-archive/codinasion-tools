export default function ConvertDecimalToOctal(decimal: number): number {
  const octalStr = decimal.toString(8);
  const octal = parseInt(octalStr, 10);
  return octal;
}
