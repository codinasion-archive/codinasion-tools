import { FormatToKebabCase } from "codinasion-tools";

let string: string = "Hello World";

let kebabCase: string = FormatToKebabCase(string);

console.log(`${string} = ${kebabCase}`);