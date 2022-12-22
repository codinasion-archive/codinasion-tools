import ConvertOctalToDecimal from '../convert-octal-to-decimal';
import ConvertDecimalToHexadecimal from '../convert-decimal-to-hexadecimal';

export default function ConvertOctalToHexadecimal(octal: string): string {
  return ConvertDecimalToHexadecimal(ConvertOctalToDecimal(octal));
}
