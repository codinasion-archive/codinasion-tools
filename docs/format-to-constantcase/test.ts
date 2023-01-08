import { FormatToConstantCase } from "codinasion-tools";

let string: string = "Hello World";

let constantCase: string = FormatToConstantCase(string);

console.log(`${string} = ${constantCase}`);