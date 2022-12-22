export default function ConvertBinaryToDecimal(binary: string): number {
  const binaryArray = binary.split('').reverse();
  return binaryArray.reduce((acc, curr, index) => {
    return acc + Number(curr) * Math.pow(2, index);
  }, 0);
}
