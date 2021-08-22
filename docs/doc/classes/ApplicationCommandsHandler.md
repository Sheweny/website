# ApplicationCommandsHandler

Create an handler for bot events. The events can be in as many subfolders as desired.

| Name      | Type                                                                                                    | Description                                           | Default | Optional |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------- | -------- |
| client    | [ShewenyClient](./ShewenyClient.md) or [Client](https://discord.js.org/#/docs/main/stable/class/Client) | The client                                            | None    |          |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)       | The directory of commands                             | None    |          |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)     | If the loadAll function must be called in constructor | None    | ✓        |

## Methods

### [async] loadAll()

Load commands.

Return : Promise<Collection<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [ApplicationCommand](../structures/ApplicationCommand.md)>>;

### getData()

Create an array with all commands data for register it.

Return : [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[ApplicationCommandData](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData)>

### [async] registerCommands(commands, guildId)

Register commands.

Parameters :

| Name     | Type                                                                                                                                                                       | Description                    | Default         | Optional |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------- | -------- |
| commands | Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [ApplicationCommand](../structures/ApplicationCommand.md))> | The commands                   | client.commands | ✓        |
| guildId  | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                          | The guild to register commands |                 | ✓        |

Return Promise<Collection<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>;

### [async] createCommand(command, guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                              | Description                   | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | ----------------------------- | ------- | -------- |
| command | [ApplicationCommand](../structures/ApplicationCommand.md)                                         | The command                   |         |          |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The guild to register command |         | ✓        |

Return Promise<Collection<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>;

### [async] editCommand(oldCommand, newCommand, guildId)

Create single commands.

Parameters :

| Name       | Type                                                                                                           | Description                 | Default | Optional |
| ---------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| command    | [ApplicationCommandResolvable](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable) | The command to edit         |         |          |
| newCommand | [ApplicationCommand](../structures/ApplicationCommand.md)                                                      | The new command             |         |          |
| guildId    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)              | The guild to update command |         | ✓        |

Return Promise<Collection<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>;

### [async] deleteCommand(command, guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                                           | Description                 | Default | Optional |
| ------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| command | [ApplicationCommandResolvable](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable) | The command to delete       |         |          |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)              | The guild to delete command |         | ✓        |

Return Promise<Collection<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>;

### [async] deleteAllCommands( guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                              | Description                 | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The guild to delete command |         | ✓        |

Return Promise<Collection<[Snowflake](https://discord.js.org/#/docs/main/stable/typedef/Snowflake), [ApplicationCommand](https://discord.js.org/#/docs/main/stable/class/ApplicationCommand)>>;

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
