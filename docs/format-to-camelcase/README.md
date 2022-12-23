---
package:
    - npm
title: Format to CamelCase
description: Convert a string to camelCase
slug: format-to-camelcase
function: FormatToCamelCase
category:
    - String
    - Format
    - CamelCase
    - Camel Case
    - CamelCase Conversion
---

<CodeBlock>

```js
import { FormatToCamelCase } from "open-tools";

let string = "Hello World";

let camelCase = FormatToCamelCase(string);

console.log(`${string} = ${camelCase}`);
```

```ts
import { FormatToCamelCase } from "open-tools";

let string: string = "Hello World";

let camelCase: string = FormatToCamelCase(string);

console.log(`${string} = ${camelCase}`);
```

</CodeBlock>
