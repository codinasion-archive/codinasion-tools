export default function ConvertDecimalToHexadecimal(decimal: number): string {
  if (decimal === 0) {
    return '0';
  }
  const hexArray = [];
  while (decimal > 0) {
    const remainder = decimal % 16;
    if (remainder < 10) {
      hexArray.push(remainder);
    } else {
      hexArray.push(String.fromCharCode(remainder + 55).toLowerCase());
    }
    decimal = Math.floor(decimal / 16);
  }
  return hexArray.reverse().join('');
}
