# CommandOptions

| Name              | Type                                                                                                                                                                                                                                                                                  | Description                                                                | Default | Optional |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------- | -------- |
| name              | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                           | The name of the command                                                    | None    |          |
| description       | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                           | The description of the command                                             | None    | ✓        |
| options           | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[ApplicationCommandOptionData](https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOptionData)>                                                                            | The options for command (slash-commands only)                              | None    | ✓        |
| args              | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[CommandMessageArgument](#commandmessageargument)>                                                                                                                                         | The options for command (message-commands only)                            | None    | ✓        |
| type              | MESSAGE_COMMAND or SLASH_COMMAND or CONTEXT_MENU_USER or CONTEXT_MENU_MESSAGE                                                                                                                                                                                                         | The type of the command                                                    | None    | ✓        |
| defaultPermission | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                         | Whether the command is enabled by default when the app is added to a guild |         |          |
| category          | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                           | The category of the command                                                | None    | ✓        |
| usage             | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) or[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | The usage of the command                                                   | None    | ✓        |
| examples          | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) or[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | The examples of the command                                                | None    | ✓        |
| channel           | [CommandOptionOnly](#commandoptiononly)                                                                                                                                                                                                                                               | Whre the command can be executed                                           | None    | ✓        |
| cooldown          | [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                                                                                                           | The cooldown time in seconde                                               | 0       | ✓        |
| adminOnly         | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                         | If the command is for bot admins only                                      | 0       | ✓        |
| userPermissions   | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>                                                                                               | The user permissions required                                              | []      | ✓        |
| clientPermissions | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>                                                                                               | The bot permissions required                                               | []      | ✓        |

## CommandOptionOnly

- GUILD

- DM

Type : [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

## CommandMessageArgument

| Name         | Type                                                                                        | Description                   | Default | Optional |
| ------------ | ------------------------------------------------------------------------------------------- | ----------------------------- | ------- | -------- |
| name         | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the command       |         |          |
| defaultValue | \*                                                                                          | The default value of argument |         | ✓        |
| type         | [CommandMessageArgsType](#commandmessageargtype)                                            | The type of the command       | STRING  | ✓        |

## CommandMessageArgType

- `STRING` : String argument

- `NUMBER` : Number argument

- `BOOLEAN` : Boolean argument

- `REST` : The string with text (without previous arguments)

- `GUILD` : A guild

- `CHANNEL` : A guild channel

- `MEMBER` : A guild member

- `GUILD_EMOJI` : A guild emoji

- `ROLE` : A guild role

- `USER` : A discord user

Type : [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)
