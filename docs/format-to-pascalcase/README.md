---
package:
    - npm
    - pip
title: Format to PascalCase
description: Convert a string to PascalCase
slug: format-to-pascalcase
function: FormatToPascalCase
category:
    - String
    - Format
    - PascalCase
    - Pascal Case
    - PascalCase Conversion
---

<CodeBlock>

```js
import { FormatToPascalCase } from "codinasion-tools";

let string = "Hello World";

let pascalCase = FormatToPascalCase(string);

console.log(`${ string } = ${ pascalCase }`);
```

```ts
import { FormatToPascalCase } from "codinasion-tools";

let string: string = "Hello World";

let pascalCase: string = FormatToPascalCase(string);

console.log(`${ string } = ${ pascalCase }`);
```

</CodeBlock>
