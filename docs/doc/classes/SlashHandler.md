# SlashHandler

Create an handler for bot events. The events can be in as many subfolders as desired.

| Name   | Type                                | Description | Default | Required |
| ------ | ----------------------------------- | ----------- | ------- | -------- |
| client | [ShewenyClient](./ShewenyClient.md) | The client  | None    | Yes      |

## Properties

### client

The client of framework.

Return : [ShewenyClient](./ShewenyClient.md)

### commands

The commands of bot.

Return : String

## Methods

### getData()

Create an array with all commands data for register it.

Return : [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Applic]>

### [async] registerCommands(commands, guildId)

Register commands.

Parameters :

| Name     | Type                                                                                                                                                 | Description                    | Default         | Optional |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------- | -------- |
| commands | Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Command](../structures/Command.md))> | The commands                   | client.commands | ✓        |
| guildId  | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                    | The guild to register commands | None            | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;

### [async] createCommand(command, guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                              | Description                   | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | ----------------------------- | ------- | -------- |
| command | [Command](../structures/Command.md)                                                               | The command                   |         | No       |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The guild to register command | None    | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;

### [async] editCommand(oldCommand, newCommand, guildId)

Create single commands.

Parameters :

| Name       | Type                                                                                                           | Description                 | Default | Optional |
| ---------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| command    | [ApplicationCommandResolvable](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable) | The command to edit         | None    | no       |
| newCommand | [Command](../structures/Command.md)                                                                            | The new command             |         | No       |
| guildId    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)              | The guild to update command | None    | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;

### [async] deleteCommand(command, guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                                           | Description                 | Default | Optional |
| ------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| command | [ApplicationCommandResolvable](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable) | The command to delete       | None    | no       |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)              | The guild to delete command | None    | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;

### [async] deleteAllCommands( guildId)

Create single commands.

Parameters :

| Name    | Type                                                                                              | Description                 | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | --------------------------- | ------- | -------- |
| guildId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The guild to delete command | None    | ✓        |

Return Promise<Collection<Snowflake, ApplicationCommand>>;
