---
package:
    - npm
title: Convert Octal to Binary
description: Convert a number from octal to binary
slug: convert-octal-to-binary
function: ConvertOctalToBinary
category:
    - Math
    - Binary
    - Octal
    - Octal to Binary
    - Binary Conversion
---

<CodeBlock>

```js
import { ConvertOctalToBinary } from "open-tools";

let octal = "0";

let binary = ConvertOctalToBinary(octal);

console.log(`${octal} = ${binary}`);
```

```ts
import { ConvertOctalToBinary } from "open-tools";

let octal: string = "0";

let binary: string = ConvertOctalToBinary(octal);

console.log(`${octal} = ${binary}`);
```

</CodeBlock>
