# File Manager

The File Manager simplifies file handling operations and acts as a lightweight alternative to directly using Node.js fs.

## Import

```js
const file = nodelly.Manager.File;
```

## Example

```js
file.write(
    "example.txt",
    "Hello Nodelly!"
);
```

## Available Functions

### write()

Writes content into a file.

```js
file.write(
    "example.txt",
    "Hello World"
);
```

### read()

Reads a file.

```js
file.read(
    "example.txt"
);
```

### exists()

Checks whether a file exists.

```js
file.exists(
    "example.txt"
);
```

### delete()

Deletes a file.

```js
file.delete(
    "example.txt"
);
```

## Example Workflow

```js
file.write(
    "test.txt",
    "Hello"
);

console.log(
    file.read("test.txt")
);

file.delete(
    "test.txt"
);
```