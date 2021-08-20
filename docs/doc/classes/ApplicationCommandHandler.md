# SlashHandler

Create an handler for bot events. The events can be in as many subfolders as desired.

| Name      | Type                                                                                                    | Description                                           | Default | Required |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------- | -------- |
| client    | [ShewenyClient](./ShewenyClient.md) or [Client](https://discord.js.org/#/docs/main/stable/class/Client) | The client                                            | None    | Yes      |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)       | The directory of commands                             | None    | Yes      |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)     | If the loadAll function must be called in constructor | None    | No       |

## Methods

### [async] loadAll()

Load commands.

Return : Promise<Collection<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [ApplicationCommand](../structures/ApplicationApplicationCommand.md)>>;

### getData()

Create an array with all commands data for register it.

Return : [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Applic]>

### [async] registerCommands(commands, guildId)

Register commands.

Parameters :

| Name     | Type                                                                                                                                                            | Description                    | Default         | Optional |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------- | -------- |
| commands | Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Command](../structures/ApplicationCommand.md))> | The commands                   | client.commands | ✓        |
| guildId  | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                               | The guild to register commands |                 | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;

### [async] createCommand(command, guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                              | Description                   | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | ----------------------------- | ------- | -------- |
| command | [Command](../structures/ApplicationCommand.md)                                                    | The command                   |         | No       |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The guild to register command |         | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;

### [async] editCommand(oldCommand, newCommand, guildId)

Create single commands.

Parameters :

| Name       | Type                                                                                                           | Description                 | Default | Optional |
| ---------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| command    | [ApplicationCommandResolvable](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable) | The command to edit         |         | no       |
| newCommand | [Command](../structures/ApplicationCommand.md)                                                                 | The new command             |         | No       |
| guildId    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)              | The guild to update command |         | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;

### [async] deleteCommand(command, guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                                           | Description                 | Default | Optional |
| ------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| command | [ApplicationCommandResolvable](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable) | The command to delete       |         | no       |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)              | The guild to delete command |         | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;

### [async] deleteAllCommands( guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                              | Description                 | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The guild to delete command |         | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;
