export default function ConvertOctalToDecimal(octalString: string): number {
  let octal = parseInt(octalString, 10);
  let decimal = 0;
  let i = 0;

  while (octal !== 0) {
    decimal += (octal % 10) * Math.pow(8, i);
    ++i;
    octal = Math.floor(octal / 10);
  }

  return decimal;
}
