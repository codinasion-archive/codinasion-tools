# Open Tools Docs Converter

This is a tool to convert the Open Tools documentation from Markdown to JSON.

```json
{
  "title": "Add Two Numbers",
  "description": "Add two numbers together",
  "slug": "add-two-numbers",
  "function": "AddTwoNumbers",
  "category": [
    "Math",
    "Addition"
  ],
  "contentHtml": "<pre><code>import { AddTwoNumbers } from \"open-tools\";\n\nlet a = 1;\nlet b = 2;\n\nlet result = AddTwoNumbers(a, b);\n\nconsole.log(`${a} + ${b} = ${result}`);\n</code></pre>\n<pre><code>import { AddTwoNumbers } from \"open-tools\";\n\nlet a: number = 1;\nlet b: number = 2;\n\nlet result: number = AddTwoNumbers(a, b);\n\nconsole.log(`${a} + ${b} = ${result}`);\n</code></pre>\n",
  "markdown": "\n<CodeBlock>\n\n```js\nimport { AddTwoNumbers } from \"open-tools\";\n\nlet a = 1;\nlet b = 2;\n\nlet result = AddTwoNumbers(a, b);\n\nconsole.log(`${a} + ${b} = ${result}`);\n```\n\n```ts\nimport { AddTwoNumbers } from \"open-tools\";\n\nlet a: number = 1;\nlet b: number = 2;\n\nlet result: number = AddTwoNumbers(a, b);\n\nconsole.log(`${a} + ${b} = ${result}`);\n```\n\n</CodeBlock>\n",
  "contributors": [],
  "latestUpdate": ""
}
```
