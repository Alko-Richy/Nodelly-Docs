# Regexes

The Regexes module provides predefined regular expressions for common validation tasks.

## Example

```js
const { Regexes } = require("nodelly");

console.log(
    Regexes.hex.test("0x1234")
);
```

## Available Categories

- Email
- Password
- Phone Number
- Time
- Date
- Hexadecimal
- IPv4
- IPv6
- Numbers
- Symbols
- Latin Letters

## Usage

```js
Regexes.email.test("test@example.com");
Regexes.password.test("StrongP@ss123");
Regexes.phoneNumber.test("+40123456789");
```