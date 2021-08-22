# SelectMenu

Represents a button.

| Name     | Type                                                                                                                                                                                               | Description                  | Default | Optional |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- | -------- |
| client   | [ShewenyClient](./ShewenyClient.md)                                                                                                                                                                | The client.                  | None    | ✓        |
| customId | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | The list of select-menus ids | None    | ✓        |

## Properties

- `client` - The client.
- `path` - The file path of the select-menu.
- `customId` - Array of customIds.

## Methods

### before()

Executed before select menu(s) checks.

Parameters :

| Name        | Type                                                                                           | Description     |
| ----------- | ---------------------------------------------------------------------------------------------- | --------------- |
| interaction | [SelectMenuInteraction](https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<any> | any

### [abstract] execute()

The execution of select menu(s).

Parameters :

| Name        | Type                                                                                           | Description     |
| ----------- | ---------------------------------------------------------------------------------------------- | --------------- |
| interaction | [SelectMenuInteraction](https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<any> | any

### unregister()

Unregister a select-menus group from the bot.

Return : [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a select-menus group.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[SelectMenu](./SelectMenu.md)> | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Null)

### [async] register()

Register the select-menu.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[SelectMenu](./SelectMenu.md)> | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Null)
