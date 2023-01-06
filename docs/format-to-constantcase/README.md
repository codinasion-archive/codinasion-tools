---
package:
    - npm
    - pip
title: Format to ConstantCase
description: Convert a string to CONSTANT_CASE
slug: format-to-constantcase
function: FormatToConstantCase
category:
    - String
    - Format
    - ConstantCase
    - Constant Case
    - ConstantCase Conversion
---

<CodeBlock>

```js
import { FormatToConstantCase } from "open-tools";

let string = "Hello World";

let constantCase = FormatToConstantCase(string);

console.log(`${ string } = ${ constantCase }`);
```

```ts
import { FormatToConstantCase } from "open-tools";

let string: string = "Hello World";

let constantCase: string = FormatToConstantCase(string);

console.log(`${ string } = ${ constantCase }`);
```

</CodeBlock>
