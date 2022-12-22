---
package: npm
title: Convert Days to Seconds
description: Convert a time in days to seconds
slug: convert-days-to-seconds
function: ConvertDaysToSeconds
category:
    - Math
    - Time
    - Days
    - Seconds
    - Days to Seconds
    - Time Conversion
---

<CodeBlock>

```js
import { ConvertDaysToSeconds } from "open-tools";

let days = 0;

let seconds = ConvertDaysToSeconds(days);

console.log(`${days}d = ${seconds}s`);
```

```ts
import { ConvertDaysToSeconds } from "open-tools";

let days: number = 0;

let seconds: number = ConvertDaysToSeconds(days);

console.log(`${days}d = ${seconds}s`);
```

</CodeBlock>
