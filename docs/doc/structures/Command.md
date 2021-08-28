# ApplicationCommand

Represents an application command.

| Name    | Type                                           | Description                | Default | Optional |
| ------- | ---------------------------------------------- | -------------------------- | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)   | The client.                | None    |          |
| options | [CommandOptions](../typedef/CommandOptions.md) | The options of the command | None    |          |

## Properties

- `client` - The client.
- `path` - The file path of the command.
- `name` - The name of the command.
- `description` - The description of the command.
- `type` - The type of the command.
- `options` - The options of the command.
- `args` - The args of the command.
- `category` - The category of the command.
- `channel` - The place whre the command should be executed.
- `cooldown` - The cooldown of the command.
- `adminOnly` - If the command is only for admins or not.
- `userPermissions` - The permissions required to execute the command for users.
- `clientPermissions` - The permissions required to execute the command for client.
- `cooldowns` - The actives cooldowns of the command.
- `aliases` - The aliases of the command.

## Methods

### before()

Executed before command checks.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### [abstract] execute()

The execution of command.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### unregister()

Unregister a command from the bot.

Return : [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a command of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[ApplicationCommand](./Command.md)> | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Null)

### [async] register()

Register the command.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[ApplicationCommand](./Command.md)> | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Null)
