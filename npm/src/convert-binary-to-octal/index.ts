import ConvertDecimalToOctal from '../convert-decimal-to-octal';
import ConvertBinaryToDecimal from '../convert-binary-to-decimal';

export default function ConvertBinaryToOctal(binary: string): string {
  return ConvertDecimalToOctal(ConvertBinaryToDecimal(binary));
}
