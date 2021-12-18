# InhibitorsManager

Create an handler for bot inhibitors. The inhibitors can be in as many subfolders as desired.

## Constructor

```js
new InhibitorsManager(client, options);
```

| Name    | Type                                                                  | Description                       | Default | Optional |
| ------- | --------------------------------------------------------------------- | --------------------------------- | ------- | -------- |
| client  | [ShewenyClient](./ShewenyClient.md)                                   | The client                        | None    | No       |
| options | [BaseManagerOptions](../typedef/ManagerOptions.md#basemanageroptions) | Options of the inhibitors manager | None    | No       |

:::details Properties

- [client](#client)
- [directory](#directory)
- [inhibitors](#inhibitors)

:::

:::details Methods

- [loadAll](#loadall)
- [unloadAll](#unloadall)

:::

## Properties

### client

The framework client.

Return : [ShewenyClient](../client/ShewenyClient.md)

### directory

The directory of inhibitors.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### inhibitors

The collection of loaded inhibitors.

Return : Collection<[Button](../structures/Button.md)>

## Methods

### loadAll()

Load all inhibitors in directory of inhibitors.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>, [Inhibitor](../structures/Inhibitor.md)>>

### unloadAll()

Unload all inhibitors.

Return : void
