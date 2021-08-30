# CommandsManager

Create an handler for bot events. The events can be in as many subfolders as desired.

| Name      | Type                                                                                              | Description                     | Default | Optional |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------- | ------- | -------- |
| client    | [ShewenyClient](./ShewenyClient.md)                                                               | The client                      | None    |          |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The directory of commands       | None    |          |
| options   | [CommandsManagerOptions](../typedef/CommandsManagerOptions.md)                                    | Options of the commands manager | None    | ✓        |

## Properties

- `client` - The client.
- `directory` - The directory of commands.
- `guildId` - The id of guild for commands interaction.
- `prefix` - The prefix of the command.
- `applicationPermissions` - If application permissions is set.
- `commands` - A collection of loaded commands.

## Methods

### [async] loadAll()

Load all commands in collection.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [ApplicationCommand](../structures/Command.md)>>

### [async] loadAndRegisterAll()

Load all commands in collection and register interactions.

Return : Promise\<void>

### getData()

Create an array with all commands data for register it.

Return : [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[ApplicationCommandData](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData)>| [ApplicationCommandData](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData) | undefined

### [async] registerAllApplicationCommands(commands, guildId)

Register application commands.

Parameters :

| Name     | Type                                                                                                                                                            | Description                    | Default                     | Optional |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------- | -------- |
| commands | Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [ApplicationCommand](../structures/Command.md))> | The commands                   | client.collections.commands | ✓        |
| guildId  | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                               | The guild to register commands |                             | ✓        |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>

### [async] registerPermissions(commands, guildId)

Register application commands.

Parameters :

| Name                | Type                                                                                                                                                                                                                                                                                                    | Description                    | Default                     | Optional |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------- | -------- |
| applicationCommands | Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand))>                                                                                               | The application commands       | client.collections.commands | ✓        |
| clientCommands      | Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Command](../structures/Command.md))>                                                                                                                                                    | The client commands            | client.collections.commands | ✓        |
| guildId             | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | The guild to register commands |                             | ✓        |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>

### [async] createCommand(command, guildId)

Create single command.

Parameters :

| Name    | Type                                                                                              | Description                   | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | ----------------------------- | ------- | -------- |
| command | [ApplicationCommand](../structures/Command.md)                                                    | The command                   |         |          |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The guild to register command |         | ✓        |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>

### [async] editCommand(oldCommand, newCommand, guildId)

Edit single command.

Parameters :

| Name       | Type                                                                                                           | Description                 | Default | Optional |
| ---------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| oldCommand | [ApplicationCommandResolvable](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable) | The command to edit         |         |          |
| newCommand | [ApplicationCommand](../structures/Command.md)                                                                 | The new command             |         |          |
| guildId    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)              | The guild to update command |         | ✓        |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>

### [async] deleteCommand(command, guildId)

Delete single command.

Parameters :

| Name    | Type                                                                                                           | Description                 | Default | Optional |
| ------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| command | [ApplicationCommandResolvable](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable) | The command to delete       |         |          |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)              | The guild to delete command |         | ✓        |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>

### [async] deleteAllCommands( guildId)

Delete all commands.

Parameters :

| Name    | Type                                                                                              | Description                 | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The guild to delete command |         | ✓        |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>

## Events

### userMissingPermissions

Emitted when user missing permissions.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction                |
| missing     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                        | The name of missing permission |

### clientMissingPermissions

Emitted when client missing permissions.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction                |
| missing     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                        | The name of missing permission |

### cooldownLimit

Emitted when user hit the cooldown limit.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction |
