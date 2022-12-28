export default function ConvertOctalToDecimal(octalString: number): number {
  let octal = octalString;
  let decimal = 0;
  let i = 0;

  while (octal !== 0) {
    decimal += (octal % 10) * Math.pow(8, i);
    ++i;
    octal = Math.floor(octal / 10);
  }

  return decimal;
}
