import { FormatToPascalCase } from "codinasion-tools";

let string: string = "Hello World";

let pascalCase: string = FormatToPascalCase(string);

console.log(`${string} = ${pascalCase}`);