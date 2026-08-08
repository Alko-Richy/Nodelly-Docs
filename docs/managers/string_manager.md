# String Manager

The String Manager contains utility functions for manipulating and analyzing strings.

## Import

```js
const string = nodelly.Manager.String;
```

## Example

```js
console.log(
    string.capitalize("hello world")
);
```

Output:

```js
Hello world
```

## Available Functions

### capitalize()

Capitalizes the first character of a string.

```js
string.capitalize("hello world");
```

### searchFor()

Searches for a value inside a string.

```js
string.searchFor(
    "Hello World",
    "World"
);
```

Returns:

```js
true
```

## Notes

All String Manager functions return a new value and do not modify the original string unless specified.