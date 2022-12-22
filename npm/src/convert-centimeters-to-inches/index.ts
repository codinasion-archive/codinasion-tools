export default function ConvertCentimetersToInches(centimeters: number): number {
  return Math.round((centimeters / 2.54) * 100) / 100;
}
