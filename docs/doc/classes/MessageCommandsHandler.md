# MessageCommandsHandler

Create an handler for bot commands. The commands can be in as many subfolders as desired.

| Name    | Type                                                                | Description               | Default | Required |
| ------- | ------------------------------------------------------------------- | ------------------------- | ------- | -------- |
| client  | [ShewenyClientOptions](./ShewenyClient.md)                          | The client                | None    | Yes      |
| options | [CommandsHandlerOptions](./typedef/MessageCommandHandlerOptions.md) | The directory of commands | None    | Yes      |

## Properties

### client

The client of framework.

Return : [ShewenyClientOptions](./ShewenyClient.md)

### slashCommands

The slash commands manager.
Note this is only available when options.type is SLASH_COMMANDS

Return : [SlashHandler](./SlashHandler.md)

### directory

The directory of commands.

Return : String

## Methods

### loadAll()

Load all commands in directory of commands.
Note : For load slash-commands you need to use SlashHandler.registerCommands() after.

Return promise Collection\<string, [MessageCommand](../structures/MessageCommand.md)>
