# Inhibitor

Represents an inhibitor.

## Constructor

```js
new Inhibitor(client, options);
```

| Name    | Type                                                                                        | Description                  | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------- | ---------------------------- | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)                                                | The client.                  | None    |          |
| name    | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the inhibitor.   | None    |          |
| options | [InhibitorOptions](../typedef/InhibitorOptions.md)                                          | The options of the inhibitor | None    |          |

:::details Properties

- [client](#client)
- [path](#path)
- [name](#name)
- [type](#type)
- [priority](#priority)

:::

:::details Methods

- [before](#before)
- [execute](#abstract-execute)
- [unregister](#unregister)
- [reload](#async-reload)
- [register](#async-register)

:::

## Properties

- `client` - The client.
- `path` - The file path of the event.
- `name` - The name of the event.
- `type` - The type of the inhibitor.
- `priority` - The priority of the inhibitor.

### client

The framework client.

Return : [ShewenyClient](../client/ShewenyClient.md)

### path

The path of the file.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### name

The name of the inhibitor.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### type

The type of the inhibitor.

Return : [InhibitorTypeResolvable](../typedef/InhibitorOptions.md#inhibitortyperesolvable)

### priority

The priority of the inhibitor.

Return : [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Methods

### [abstract] execute()

The execution of inhibitor.

Parameters :

| Name    | Type                                                                                                      | Description     |
| ------- | --------------------------------------------------------------------------------------------------------- | --------------- |
| ...args | [args Events](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-applicationCommandCreate) | Args for events |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### [abstract] onFailure()

The execution if inhibitor has failed.

Parameters :

| Name    | Type                                                                                                      | Description     |
| ------- | --------------------------------------------------------------------------------------------------------- | --------------- |
| ...args | [args Events](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-applicationCommandCreate) | Args for events |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### unregister()

Unregister a inhibitor from the bot.

Return : [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a inhibotor.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[Inhibitor](./Inhibitor.md)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Null)

### [async] register()

Register the inhibotor.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[Inhibitor](./Inhibitor.md)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Null)
