# Command

Represents a command.

| Name    | Type                                                                                              | Description                | Default | Required |
| ------- | ------------------------------------------------------------------------------------------------- | -------------------------- | ------- | -------- |
| Client  | [ShewenyClient](../classes/ShewenyClient.md)                                                      | The client.                | None    | Yes      |
| name    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the command.   | None    | Yes      |
| options | [CommandOptions](../typedef/CommandOptions.md)                                                    | The options of the command | None    | Yes      |

## Methods

### unregister()

Unregister a command from the bot.

Return true

### [async] reload()

Reload a command of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Command](.)> or null

### [async] register()

Register the command.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Command](.)> or null
