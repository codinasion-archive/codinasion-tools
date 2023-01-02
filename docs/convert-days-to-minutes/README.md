---
package:
    - npm
    - pip
title: Convert Days to Minutes
description: Convert a time in days to minutes
slug: convert-days-to-minutes
function: ConvertDaysToMinutes
category:
    - Math
    - Time
    - Days
    - Minutes
    - Days to Minutes
    - Time Conversion
---

<CodeBlock>

```js
import { ConvertDaysToMinutes } from "open-tools";

let days = 0;

let minutes = ConvertDaysToMinutes(days);

console.log(`${days}d = ${minutes}m`);
```

```ts
import { ConvertDaysToMinutes } from "open-tools";

let days: number = 0;

let minutes: number = ConvertDaysToMinutes(days);

console.log(`${days}d = ${minutes}m`);
```

</CodeBlock>
