---
package:
    - npm
title: Add Two Numbers
description: Add two numbers together
slug: add-two-numbers
function: AddTwoNumbers
category:
    - Math
    - Addition
---

<CodeBlock>

```js
import { AddTwoNumbers } from "open-tools";

let a = 1;
let b = 2;

let result = AddTwoNumbers(a, b);

console.log(`${a} + ${b} = ${result}`);
```

```ts
import { AddTwoNumbers } from "open-tools";

let a: number = 1;
let b: number = 2;

let result: number = AddTwoNumbers(a, b);

console.log(`${a} + ${b} = ${result}`);
```

</CodeBlock>
