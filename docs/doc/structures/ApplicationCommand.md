# Command

Represents an application command.

| Name    | Type                                                                                               | Description                | Default | Required |
| ------- | -------------------------------------------------------------------------------------------------- | -------------------------- | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)                                                       | The client.                | None    | Yes      |
| data    | [ApplicationCommandData](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData) | The data of command.       | None    | Yes      |
| options | [ApplicationCommandOptions](../typedef/ApplicationCommandOptions.md)                               | The options of the command | None    | Yes      |

## Methods

### before()

Executed before commands checks.

Parameters :

| Name        | Type                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------- | --------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction |

Return true

### [abstract] execute()

The execution of command.

Parameters :

| Name        | Type                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------- | --------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction |

### unregister()

Unregister a command from the bot.

Return true

### [async] reload()

Reload a command of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Command](.)> or null

### [async] register()

Register the command.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Command](.)> or null
