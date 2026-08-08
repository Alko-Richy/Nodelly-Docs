# Checker

The Checker module allows you to verify data types and structures.

## Examples

```js
Checker.isString("Hello");
Checker.isNumber(123);
Checker.isArray([1, 2, 3]);
Checker.isObject({});
Checker.isRegex(/test/);
```

## Empty Checks

```js
Checker.isEmptyString("");
Checker.isEmptyArray([]);
Checker.isEmptyObject({});
```

## Purpose

Checker helps validate user input before processing data.