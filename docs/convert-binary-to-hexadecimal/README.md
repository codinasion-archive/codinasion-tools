---
package:
    - npm
    - pip
title: Convert Binary to Hexadecimal
description: Convert a binary number to a hexadecimal number
slug: convert-binary-to-hexadecimal
function: ConvertBinaryToHexadecimal
category:
    - Math
    - Binary
    - Base Conversion
    - Hexadecimal
    - Binary to Hexadecimal
    - Number Conversion
---

<CodeBlock>

```js
import { ConvertBinaryToHexadecimal } from "open-tools";

let binary = "1010";

let result = ConvertBinaryToHexadecimal(binary);

console.log(`${binary} = ${result}`);
```

```ts
import { ConvertBinaryToHexadecimal } from "open-tools";

let binary: string = "1010";

let result: string = ConvertBinaryToHexadecimal(binary);

console.log(`${binary} = ${result}`);
```

</CodeBlock>
