# Array Manager

The Array Manager provides useful utilities for working with arrays.

## Import

```js
const array = nodelly.Manager.Array;
```

## Example

```js
array.shuffle([
    1, 2, 3, 4, 5
]);
```

## Available Functions

### shuffle()

Randomly shuffles an array.

```js
array.shuffle([
    1, 2, 3, 4, 5
]);
```

### remove()

Removes an element from an array.

```js
array.remove(
    ["A", "B", "C"],
    "B"
);
```

### removeMultiple()

Removes multiple elements.

```js
array.removeMultiple(
    ["A", "B", "C", "D"],
    ["B", "D"]
);
```

## Notes

Some functions may modify the original array.