---
package:
    - npm
    - pip
title: Convert Binary to Decimal
description: Convert a binary number to a decimal number
slug: convert-binary-to-decimal
function: ConvertBinaryToDecimal
category:
    - Math
    - Binary
    - Base Conversion
    - Decimal
    - Binary to Decimal
    - Number Conversion
---

<CodeBlock>

```js
import { ConvertBinaryToDecimal } from "open-tools";

let binary = "1010";

let result = ConvertBinaryToDecimal(binary);

console.log(`${binary} = ${result}`);
```

```ts
import { ConvertBinaryToDecimal } from "open-tools";

let binary: string = "1010";

let result: number = ConvertBinaryToDecimal(binary);

console.log(`${binary} = ${result}`);
```

</CodeBlock>
