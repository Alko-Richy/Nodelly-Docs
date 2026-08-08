# Managers

Managers are utility collections designed to simplify development.

## Available Managers

### String Manager

```js
Manager.String.capitalize(
    "hello world"
);
```

### Array Manager

```js
Manager.Array.shuffle(
    [1, 2, 3, 4]
);
```

### Randomizer Manager

```js
Manager.Randomizer.randomString(
    10
);
```

### File Manager

```js
Manager.File.write(
    "test.txt",
    "Hello World"
);
```

### Config Manager

```js
Manager.Config.create(
    "config.yml",
    {
        app: {
            name: "Nodelly"
        }
    }
);
```