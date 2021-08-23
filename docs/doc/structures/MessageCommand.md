# MessageCommand

Represents a message command.

| Name    | Type                                                                                              | Description                | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | -------------------------- | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)                                                      | The client.                | None    |          |
| name    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the command.   | None    |          |
| options | [CommandOptions](../typedef/CommandOptions.md)                                         | The options of the command | None    |          |

## Properties

- `client` - The client.
- `path` - The file path of the command.
- `only` - The place whre the command should be executed.
- `name` - The name of the command.
- `description` - The description of the command.
- `aliases` - The aliases of the command.
- `category` - The category of the command.
- `cooldown` - The cooldown of the command.
- `userPermissions` - The permissions required to execute the command for users.
- `clientPermissions` - The permissions required to execute the command for client.
- `cooldowns` - The actives cooldowns of the command.

## Methods

### before()

Executed before command checks.

Parameters :

| Name    | Type                                                                                                                                                                                               | Description              |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| message | [Message](https://discord.js.org/#/docs/main/stable/class/Message)                                                                                                                                 | The message              |
| args    | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | The arguments of command |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<any> | any

### [abstract] execute()

The execution of command.

Parameters :

| Name    | Type                                                                                                                                                                                               | Description              |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| message | [Message](https://discord.js.org/#/docs/main/stable/class/Message)                                                                                                                                 | The message              |
| args    | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | The arguments of command |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<any> | any

### unregister()

Unregister a command from the bot.

Return true

### [async] reload()

Reload a command of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[MessageCommand](./MessageCommand.md)> | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Null)

### [async] register()

Register the command.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[MessageCommand](./MessageCommand.md)> | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Null)
