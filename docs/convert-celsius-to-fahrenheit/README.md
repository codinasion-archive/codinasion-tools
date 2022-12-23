---
package:
    - npm
title: Convert Celsius to Fahrenheit
description: Convert a temperature in Celsius to Fahrenheit
slug: convert-celsius-to-fahrenheit
function: ConvertCelsiusToFahrenheit
category:
    - Math
    - Temperature
    - Celsius
    - Fahrenheit
    - Celsius to Fahrenheit
    - Temperature Conversion
---

<CodeBlock>

```js
import { ConvertCelsiusToFahrenheit } from "open-tools";

let celsius = 0;

let result = ConvertCelsiusToFahrenheit(celsius);

console.log(`${celsius}°C = ${result}°F`);
```

```ts
import { ConvertCelsiusToFahrenheit } from "open-tools";

let celsius: number = 0;

let result: number = ConvertCelsiusToFahrenheit(celsius);

console.log(`${celsius}°C = ${result}°F`);
```

</CodeBlock>
