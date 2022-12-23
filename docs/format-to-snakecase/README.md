---
package:
    - npm
title: Format to SnakeCase
description: Convert a string to snake_case
slug: format-to-snakecase
function: FormatToSnakeCase
category:
    - String
    - Format
    - SnakeCase
    - Snake Case
    - SnakeCase Conversion
---

<CodeBlock>

```js
import { FormatToSnakeCase } from "open-tools";

let string = "Hello World";

let snakeCase = FormatToSnakeCase(string);

console.log(`${ string } = ${ snakeCase }`);
```

```ts
import { FormatToSnakeCase } from "open-tools";

let string: string = "Hello World";

let snakeCase: string = FormatToSnakeCase(string);

console.log(`${ string } = ${ snakeCase }`);
```

</CodeBlock>
