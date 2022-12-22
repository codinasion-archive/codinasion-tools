export default function convertHexadecimalToBinary(hexadecimal: string): string {
  const binary = hexadecimal
    .split('')
    .map((hexadecimalDigit) => {
      const binaryDigit = parseInt(hexadecimalDigit, 16).toString(2);
      return binaryDigit.padStart(4, '0');
    })
    .join('');
  return binary;
}
