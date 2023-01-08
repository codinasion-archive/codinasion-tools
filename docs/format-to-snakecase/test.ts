import { FormatToSnakeCase } from "codinasion-tools";

let string: string = "Hello World";

let snakeCase: string = FormatToSnakeCase(string);

console.log(`${string} = ${snakeCase}`);