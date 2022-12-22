---
package: npm
title: Convert Octal to Decimal
description: Convert a number from octal to decimal
slug: convert-octal-to-decimal
function: ConvertOctalToDecimal
category:
    - Math
    - Decimal
    - Octal
    - Octal to Decimal
    - Decimal Conversion
---

<CodeBlock>

```js
import { ConvertOctalToDecimal } from "open-tools";

let octal = "0";

let decimal = ConvertOctalToDecimal(octal);

console.log(`${octal} = ${decimal}`);
```

```ts
import { ConvertOctalToDecimal } from "open-tools";

let octal: string = "0";

let decimal: number = ConvertOctalToDecimal(octal);

console.log(`${octal} = ${decimal}`);
```

</CodeBlock>
