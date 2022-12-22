import ConvertHexadecimalToDecimal from '../convert-hexadecimal-to-decimal';
import ConvertDecimalToOctal from '../convert-decimal-to-octal';

export default function ConvertHexadecimalToOctal(hexadecimal: string): string {
  return ConvertDecimalToOctal(ConvertHexadecimalToDecimal(hexadecimal));
}
