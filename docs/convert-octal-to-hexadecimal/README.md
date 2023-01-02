---
package:
    - npm
    - pip
title: Convert Octal to Hexadecimal
description: Convert a number from octal to hexadecimal
slug: convert-octal-to-hexadecimal
function: ConvertOctalToHexadecimal
category:
    - Math
    - Hexadecimal
    - Octal
    - Octal to Hexadecimal
    - Hexadecimal Conversion
---

<CodeBlock>

```js
import { ConvertOctalToHexadecimal } from "open-tools";

let octal = "0";

let hexadecimal = ConvertOctalToHexadecimal(octal);

console.log(`${octal} = ${hexadecimal}`);
```

```ts
import { ConvertOctalToHexadecimal } from "open-tools";

let octal: string = "0";

let hexadecimal: string = ConvertOctalToHexadecimal(octal);

console.log(`${octal} = ${hexadecimal}`);
```

</CodeBlock>
