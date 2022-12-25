import ConvertOctalToDecimal from '../convert-octal-to-decimal';
import ConvertDecimalToBinary from '../convert-decimal-to-binary';

export default function ConvertOctalToBinary(octal: number): string {
  return ConvertDecimalToBinary(ConvertOctalToDecimal(octal));
}
