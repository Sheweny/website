# MessageCommandsHandler

Create an handler for bot commands. The commands can be in as many subfolders as desired.

| Name    | Type                                                                                                    | Description               | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------------- | ------------------------- | ------- | -------- |
| client  | [ShewenyClient](./ShewenyClient.md) or [Client](https://discord.js.org/#/docs/main/stable/class/Client) | The client                | None    |          |
| options | [CommandsHandlerOptions](./typedef/MessageCommandHandlerOptions.md)                                     | The directory of commands | None    |          |

## Properties

### client

The client of framework.

Return : [ShewenyClient](./ShewenyClient.md) or [Client](https://discord.js.org/#/docs/main/stable/class/Client)

### directory

The directory of commands.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Methods

### loadAll()

Load all commands in directory of commands.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<Collection<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [MessageCommand](../structures/MessageCommand.md)>>

## Events

### userMissingPermissions

Emitted when user missing permissions.

Parameters :

| Name        | Type                                                                                              | Description                    |
| ----------- | ------------------------------------------------------------------------------------------------- | ------------------------------ |
| interaction | [Message](https://discord.js.org/#/docs/main/stable/class/Message)                                | The message                    |
| missing     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of missing permission |

### clientMissingPermissions

Emitted when client missing permissions.

Parameters :

| Name        | Type                                                                                              | Description                    |
| ----------- | ------------------------------------------------------------------------------------------------- | ------------------------------ |
| interaction | [Message](https://discord.js.org/#/docs/main/stable/class/Message)                                | The message                    |
| missing     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of missing permission |

### cooldownLimit

Emitted when user hit the cooldown limit.

Parameters :

| Name        | Type                                                               | Description |
| ----------- | ------------------------------------------------------------------ | ----------- |
| interaction | [Message](https://discord.js.org/#/docs/main/stable/class/Message) | The message |
