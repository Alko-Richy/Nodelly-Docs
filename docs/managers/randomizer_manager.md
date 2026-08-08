# Randomizer Manager

Generate random values quickly and easily.

## Import

```js
const randomizer = nodelly.Manager.Randomizer;
```

## Example

```js
randomizer.randomString(10);
```

Possible Output:

```js
"A7Xk92LpQe"
```

## Available Functions

### randomString()

Generates a random string.

```js
randomizer.randomString(10);
```

### randomNumber()

Generates a random number.

```js
randomizer.randomNumber(
    1,
    100
);
```

### randomElement()

Returns a random element from an array.

```js
randomizer.randomElement([
    "Apple",
    "Banana",
    "Orange"
]);
```

## Notes

Outputs are different on every execution.