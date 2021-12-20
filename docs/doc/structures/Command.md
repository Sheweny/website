# Command

Represents an application command.

## Constructor

```js
new Command(client, options);
```

| Name    | Type                                           | Description                | Default | Optional |
| ------- | ---------------------------------------------- | -------------------------- | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)   | The client.                | None    |          |
| options | [CommandOptions](../typedef/CommandOptions.md) | The options of the command | None    |          |

:::details Properties

- [client](#client)
- [manager](#manager)
- [path](#path)
- [name](#name)
- [description](#description)
- [category](#category)
- [usage](#usage)
- [examples](#examples)
- [type](#type)
- [options](#options)
- [args](#args)
- [aliases](#aliases)
- [channel](#channel)
- [cooldown](#cooldown)
- [adminOnly](#adminonly)
- [userPermissions](#userpermissions)
- [clientPermissions](#clientpermissions)

:::

:::details Methods

- [before](#before)
- [execute](#abstract-execute)
- [onAutocomplete](#onautocomplete)
- [unregister](#unregister)
- [reload](#async-reload)
- [register](#async-register)

:::

## Properties

### client

The framework client.

Return : [ShewenyClient](../client/ShewenyClient.md)

### manager

The manager of this structure.

Return : [CommandsManager](../managers/CommandsManager.md)

### path

The path of the file.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### name

The name of the command.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### description

The description of the command.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### category

The category of the command.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### usage

The usage of the command.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>

### examples

The examples of the command.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>

### type

The type of the command.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### options

The options of the command.

Return : [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[ApplicationCommandOptionData](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOptionData)>

### args

The args of the command.

Return : [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[CommandOptions](../typedef/CommandOptions.md#commandmessageargument)>

### aliases

The args of the command.

Return : [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>

### channel

The channel of the command.

Return : [CommandOptionOnly](../typedef/CommandOptions#commandoptiononly)

### cooldown

The cooldown of the command.

Return : [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### adminOnly

If the command is only for admins or not.

Return : [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### userPermissions

The userPermissions of the command.

Return : [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>

### clientPermissions

The name of the command.

Return : [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>

## Methods

### before()

Executed before command checks.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### [abstract] execute()

The execution of command.

Parameters :

| Name        | Type                                                                                                                                                                                                                                                           | Description                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [Message](https://discord.js.org/#/docs/main/stable/class/Message) | The interaction                       |
| arguments   | [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)                                                                                                                                                                    | The arguments (only message-commands) |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### onAutocomplete()

The execution of auto-complete (only slash-commands).

Parameters :

| Name        | Type                                                                                          | Description                   |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------------- |
| interaction | [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/AutocompleteInteraction) | The auto-complete interaction |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### unregister()

Unregister a command from the bot.

Return : [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a command of bot.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[ApplicationCommand](./Command.md)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Null)

### [async] register()

Register the command.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[ApplicationCommand](./Command.md)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Null)
