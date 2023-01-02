---
package:
    - npm
    - pip
title: Convert Hexadecimal to Octal
description: Convert a number from hexadecimal to octal
slug: convert-hexadecimal-to-octal
function: ConvertHexadecimalToOctal
category:
    - Math
    - Octal
    - Hexadecimal
    - Hexadecimal to Octal
    - Octal Conversion
---

<CodeBlock>

```js
import { ConvertHexadecimalToOctal } from "open-tools";

let hexadecimal = "0";

let octal = ConvertHexadecimalToOctal(hexadecimal);

console.log(`${hexadecimal} = ${octal}`);
```

```ts
import { ConvertHexadecimalToOctal } from "open-tools";

let hexadecimal: string = "0";

let octal: string = ConvertHexadecimalToOctal(hexadecimal);

console.log(`${hexadecimal} = ${octal}`);
```

</CodeBlock>
