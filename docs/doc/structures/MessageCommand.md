# MessageCommand

Represents a message command.

| Name    | Type                                                                                              | Description                | Default | Required |
| ------- | ------------------------------------------------------------------------------------------------- | -------------------------- | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)                                                      | The client.                | None    | Yes      |
| name    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the command.   | None    | Yes      |
| options | [ApplicationCommandOptions](../typedef/CommandOptions.md)                                         | The options of the command | None    | Yes      |

## Methods

### before()

Executed before commands checks.

Parameters :

| Name    | Type                                                                                                                                                                                               | Description              |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| message | [Message](https://discord.js.org/#/docs/main/stable/class/Message)                                                                                                                                 | The message              |
| args    | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | The arguments of command |

### [abstract] execute()

The execution of command.

Parameters :

| Name    | Type                                                                                                                                                                                               | Description              |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| message | [Message](https://discord.js.org/#/docs/main/stable/class/Message)                                                                                                                                 | The message              |
| args    | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | The arguments of command |

Return : Promise\<any> | any

### unregister()

Unregister a command from the bot.

Return true

### [async] reload()

Reload a command of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Command](.)> or null

### [async] register()

Register the command.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Command](.)> or null
