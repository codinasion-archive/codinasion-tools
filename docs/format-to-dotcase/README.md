---
package:
    - npm
    - pip
title: Format to DotCase
description: Convert a string to dot.case
slug: format-to-dotcase
function: FormatToDotCase
category:
    - String
    - Format
    - DotCase
    - Dot Case
    - DotCase Conversion
---

<CodeBlock>

```js
import { FormatToDotCase } from "codinasion-tools";

let string = "Hello World";

let dotCase = FormatToDotCase(string);

console.log(`${ string } = ${ dotCase }`);
```

```ts
import { FormatToDotCase } from "codinasion-tools";

let string: string = "Hello World";

let dotCase: string = FormatToDotCase(string);

console.log(`${ string } = ${ dotCase }`);
```

</CodeBlock>
