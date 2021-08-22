# ApplicationCommand

Represents an application command.

| Name    | Type                                                                                               | Description                | Default | Required |
| ------- | -------------------------------------------------------------------------------------------------- | -------------------------- | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)                                                       | The client.                | None    | Yes      |
| data    | [ApplicationCommandData](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData) | The data of command.       | None    | Yes      |
| options | [ApplicationCommandOptions](../typedef/CommandOptions.md)                                          | The options of the command | None    | Yes      |

## Properties

- `client` - The client.
- `path` - The file path of the command.
- `data` - The data of the command.
- `description` - The description of the command.
- `category` - The category of the command.
- `only` - The place whre the command should be executed.
- `cooldown` - The cooldown of the command.
- `userPermissions` - The permissions required to execute the command for users.
- `clientPermissions` - The permissions required to execute the command for client.
- `cooldowns` - The actives cooldowns of the command.

## Methods

### before()

Executed before commands checks.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction |

### [abstract] execute()

The execution of command.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction |

### unregister()

Unregister a command from the bot.

Return true

### [async] reload()

Reload a command of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[ApplicationCommand](.)> or null

### [async] register()

Register the command.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[ApplicationCommand](.)> or null
