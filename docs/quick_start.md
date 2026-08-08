# Quick Start

Nodelly is designed to reduce repetitive code and simplify common development tasks.

## Example

```js
const { Sort, Validator } = require("nodelly");

console.log(
    Sort.quickSort([9, 3, 1, 7, 5])
);

console.log(
    Validator.isValidEmail("example@gmail.com")
);
```

Output:

```js
[1, 3, 5, 7, 9]
true
```

## Available Modules

- Regexes
- Sort
- Checker
- Validator
- Manager