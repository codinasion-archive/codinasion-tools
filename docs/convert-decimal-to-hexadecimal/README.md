---
package:
    - npm
    - pip
title: Convert Decimal to Hexadecimal
description: Convert a number from decimal to hexadecimal
slug: convert-decimal-to-hexadecimal
function: ConvertDecimalToHexadecimal
category:
    - Math
    - Hexadecimal
    - Decimal
    - Decimal to Hexadecimal
    - Hexadecimal Conversion
---

<CodeBlock>

```js
import { ConvertDecimalToHexadecimal } from "codinasion-tools";

let decimal = 0;

let hexadecimal = ConvertDecimalToHexadecimal(decimal);

console.log(`${decimal} = ${hexadecimal}`);
```

```ts
import { ConvertDecimalToHexadecimal } from "codinasion-tools";

let decimal: number = 0;

let hexadecimal: string = ConvertDecimalToHexadecimal(decimal);

console.log(`${decimal} = ${hexadecimal}`);
```

</CodeBlock>
