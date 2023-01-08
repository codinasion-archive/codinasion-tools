---
package:
    - npm
    - pip
title: Convert Days to Hours
description: Convert a time in days to hours
slug: convert-days-to-hours
function: ConvertDaysToHours
category:
    - Math
    - Time
    - Days
    - Hours
    - Days to Hours
    - Time Conversion
---

<CodeBlock>

```js
import { ConvertDaysToHours } from "codinasion-tools";

let days = 0;

let result = ConvertDaysToHours(days);

console.log(`${days}d = ${result}h`);
```

```ts
import { ConvertDaysToHours } from "codinasion-tools";

let days: number = 0;

let result: number = ConvertDaysToHours(days);

console.log(`${days}d = ${result}h`);
```

</CodeBlock>
