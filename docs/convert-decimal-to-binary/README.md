---
package:
    - npm
    - pip
title: Convert Decimal to Binary
description: Convert a number from decimal to binary
slug: convert-decimal-to-binary
function: ConvertDecimalToBinary
category:
    - Math
    - Binary
    - Decimal
    - Decimal to Binary
    - Binary Conversion
---

<CodeBlock>

```js
import { ConvertDecimalToBinary } from "open-tools";

let decimal = 0;

let binary = ConvertDecimalToBinary(decimal);

console.log(`${decimal} = ${binary}`);
```

```ts
import { ConvertDecimalToBinary } from "open-tools";

let decimal: number = 0;

let binary: string = ConvertDecimalToBinary(decimal);

console.log(`${decimal} = ${binary}`);
```

</CodeBlock>
