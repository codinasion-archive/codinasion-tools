---
package:
    - npm
    - pip
title: Convert Hexadecimal to Binary
description: Convert a number from hexadecimal to binary
slug: convert-hexadecimal-to-binary
function: ConvertHexadecimalToBinary
category:
    - Math
    - Binary
    - Hexadecimal
    - Hexadecimal to Binary
    - Binary Conversion
---

<CodeBlock>

```js
import { ConvertHexadecimalToBinary } from "codinasion-tools";

let hexadecimal = "0";

let binary = ConvertHexadecimalToBinary(hexadecimal);

console.log(`${hexadecimal} = ${binary}`);
```

```ts
import { ConvertHexadecimalToBinary } from "codinasion-tools";

let hexadecimal: string = "0";

let binary: string = ConvertHexadecimalToBinary(hexadecimal);

console.log(`${hexadecimal} = ${binary}`);
```

</CodeBlock>
