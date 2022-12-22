---
package: npm
title: Format to TitleCase
description: Convert a string to TitleCase
slug: format-to-titlecase
function: FormatToTitleCase
category:
    - String
    - Format
    - TitleCase
    - Title Case
    - TitleCase Conversion
---

<CodeBlock>

```js
import { FormatToTitleCase } from "open-tools";

let string = "Hello World";

let titleCase = FormatToTitleCase(string);

console.log(`${ string } = ${ titleCase }`);
```

```ts
import { FormatToTitleCase } from "open-tools";

let string: string = "Hello World";

let titleCase: string = FormatToTitleCase(string);

console.log(`${ string } = ${ titleCase }`);
```

</CodeBlock>
