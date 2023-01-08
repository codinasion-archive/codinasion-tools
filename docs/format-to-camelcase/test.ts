import { FormatToCamelCase } from "codinasion-tools";

let string: string = "Hello World";

let camelCase: string = FormatToCamelCase(string);

console.log(`${string} = ${camelCase}`);