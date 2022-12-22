---
package: npm
title: Format to PathCase
description: Convert a string to path/case
slug: format-to-pathcase
function: FormatToPathCase
category:
    - String
    - Format
    - PathCase
    - Path Case
    - PathCase Conversion
---

<CodeBlock>

```js
import { FormatToPathCase } from "open-tools";

let string = "Hello World";

let pathCase = FormatToPathCase(string);

console.log(`${ string } = ${ pathCase }`);
```

```ts
import { FormatToPathCase } from "open-tools";

let string: string = "Hello World";

let pathCase: string = FormatToPathCase(string);

console.log(`${ string } = ${ pathCase }`);
```

</CodeBlock>
