export default function ConvertCentimetersToFeet(centimeters: number): number {
  return Math.round((centimeters / 30.48) * 100) / 100;
}
