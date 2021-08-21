# SelectMenu

Represents a button.

| Name     | Type                                                                                                                                                                                               | Description                  | Default | Required |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- | -------- |
| client   | [ShewenyClient](./ShewenyClient.md)                                                                                                                                                                | The client.                  | None    | Yes      |
| customId | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | The list of select-menus ids | None    | Yes      |

## Properties

- `client` - The client.
- `path` - The file path of the select-menu.
- `customId` - Array of customIds.

## Methods

### unregister()

Unregister a select-menus group from the bot.

Return : [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a select-menus group.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[SelectMenu](.)> or null

### [async] register()

Register the select-menu.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[SelectMenu](.)> or null
