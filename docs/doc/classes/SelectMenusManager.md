# SelectMenusHandler

Create an handler for bot select-menus. The select-menus can be in as many subfolders as desired.

| Name      | Type                                                                                                | Description                        | Default | Optional |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The directory of select-menus      | None    |          |
| client    | [ShewenyClient](./ShewenyClient.md)                                                                 | The client                         | None    | ✓        |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If handler load all in constructor | None    | ✓        |

## Properties

- `client` - The client.
- `directory` - The directory of selectMenus.
- `selectMenus` - A collection of loaded selectMenus.

## Methods

### loadAll()

Load all select-menus in directory of select-menus.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [SelectMenu](../structures/SelectMenu.md)>>
