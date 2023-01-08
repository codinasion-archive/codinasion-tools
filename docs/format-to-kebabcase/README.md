---
package:
    - npm
    - pip
title: Format to KebabCase
description: Convert a string to kebab-case
slug: format-to-kebabcase
function: FormatToKebabCase
category:
    - String
    - Format
    - KebabCase
    - Kebab Case
    - KebabCase Conversion
---

<CodeBlock>

```js
import { FormatToKebabCase } from "codinasion-tools";

let string = "Hello World";

let kebabCase = FormatToKebabCase(string);

console.log(`${ string } = ${ kebabCase }`);
```

```ts
import { FormatToKebabCase } from "codinasion-tools";

let string: string = "Hello World";

let kebabCase: string = FormatToKebabCase(string);

console.log(`${ string } = ${ kebabCase }`);
```

</CodeBlock>
