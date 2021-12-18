# SelectMenusManager

Create an handler for bot select-menus. The select-menus can be in as many subfolders as desired.

## Constructor

```js
new SelectMenusManager(client, options);
```

| Name    | Type                                                                  | Description                         | Default | Optional |
| ------- | --------------------------------------------------------------------- | ----------------------------------- | ------- | -------- |
| client  | [ShewenyClient](./ShewenyClient.md)                                   | The client                          | None    | No       |
| options | [BaseManagerOptions](../typedef/ManagerOptions.md#basemanageroptions) | Options of the select-menus manager | None    | No       |

:::details Properties

- [client](#client)
- [directory](#directory)
- [selectMenus](#selectMenus)

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

The directory of selectMenus.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### selectMenus

The collection of loaded selectMenus.

Return : Collection<[Button](../structures/Button.md)>

## Methods

### loadAll()

Load all select-menus in directory of select-menus.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>, [SelectMenu](../structures/SelectMenu.md)>>

### unloadAll()

Unload all select-menus.

Return : void
