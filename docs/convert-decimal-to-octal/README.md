---
package:
    - npm
title: Convert Decimal to Octal
description: Convert a number from decimal to octal
slug: convert-decimal-to-octal
function: ConvertDecimalToOctal
category:
    - Math
    - Octal
    - Decimal
    - Decimal to Octal
    - Octal Conversion
---

<CodeBlock>

```js
import { ConvertDecimalToOctal } from "open-tools";

let decimal = 0;

let octal = ConvertDecimalToOctal(decimal);

console.log(`${decimal} = ${octal}`);
```

```ts
import { ConvertDecimalToOctal } from "open-tools";

let decimal: number = 0;

let octal: string = ConvertDecimalToOctal(decimal);

console.log(`${decimal} = ${octal}`);
```

</CodeBlock>
