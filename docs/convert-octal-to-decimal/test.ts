import { ConvertOctalToDecimal } from "codinasion-tools";

let octal: string = "0";

let decimal: number = ConvertOctalToDecimal(octal);

console.log(`${octal} = ${decimal}`);