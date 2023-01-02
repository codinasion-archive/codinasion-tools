---
package:
    - npm
    - pip
title: Convert Binary to Octal
description: Convert a binary number to an octal number
slug: convert-binary-to-octal
function: ConvertBinaryToOctal
category:
    - Math
    - Binary
    - Base Conversion
    - Octal
    - Binary to Octal
    - Number Conversion
---

<CodeBlock>

```js
import { ConvertBinaryToOctal } from "open-tools";

let binary = "1010";

let result = ConvertBinaryToOctal(binary);

console.log(`${binary} = ${result}`);
```

```ts
import { ConvertBinaryToOctal } from "open-tools";

let binary: string = "1010";

let result: string = ConvertBinaryToOctal(binary);

console.log(`${binary} = ${result}`);
```

</CodeBlock>
