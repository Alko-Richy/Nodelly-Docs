# Config Manager

The Config Manager makes configuration management easier using YAML files.

## Import

```js
const config = nodelly.Manager.Config;
```

## Example

```js
config.create(
    "config.yml",
    {
        app: {
            name: "Nodelly"
        }
    }
);
```

## Available Functions

### create()

Creates a configuration file.

```js
config.create(
    "config.yml",
    {
        debug: true
    }
);
```

### read()

Reads a configuration file.

```js
config.read(
    "config.yml"
);
```

### get()

Gets a value from a path.

```js
config.get(
    "config.yml",
    "app.name"
);
```

### set()

Updates a value.

```js
config.set(
    "config.yml",
    "debug",
    false
);
```

### delete()

Deletes a value.

```js
config.delete(
    "config.yml",
    "app.version"
);
```

## Example Workflow

```js
config.create(
    "config.yml",
    {
        app: {
            name: "Nodelly",
            version: "0.2.1"
        }
    }
);

console.log(
    config.get(
        "config.yml",
        "app.name"
    )
);
```