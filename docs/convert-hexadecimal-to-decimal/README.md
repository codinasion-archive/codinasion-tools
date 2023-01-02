---
package:
    - npm
    - pip
title: Convert Hexadecimal to Decimal
description: Convert a number from hexadecimal to decimal
slug: convert-hexadecimal-to-decimal
function: ConvertHexadecimalToDecimal
category:
    - Math
    - Decimal
    - Hexadecimal
    - Hexadecimal to Decimal
    - Decimal Conversion
---

<CodeBlock>

```js
import { ConvertHexadecimalToDecimal } from "open-tools";

let hexadecimal = "0";

let decimal = ConvertHexadecimalToDecimal(hexadecimal);

console.log(`${hexadecimal} = ${decimal}`);
```

```ts
import { ConvertHexadecimalToDecimal } from "open-tools";

let hexadecimal: string = "0";

let decimal: number = ConvertHexadecimalToDecimal(hexadecimal);

console.log(`${hexadecimal} = ${decimal}`);
```

</CodeBlock>
