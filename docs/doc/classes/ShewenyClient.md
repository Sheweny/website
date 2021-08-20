# ShewenyClient

The Sheweny framework client.

Parameters :

| Name    | Type                                                       | Description                | Default | Required |
| ------- | ---------------------------------------------------------- | -------------------------- | ------- | -------- |
| options | [ShewenyClientOptions](../typedef/ShewenyClientOptions.md) | The options for the client | None    | Yes      |

## Properties

### handlers

The handlers of the client.

Return : [ClientHandlers](../typedef/ClientHandlers.md).

### commands

Commands manager

Return : [ClientCommandsManager](../typedef/ClientCommandsManager.md)

### events

A collection of commands or undefined if no command handler provided

Return : Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Event](./Event.md)>.

## Events

---

## Events permissions

### userMissingPermissions

Emitted when an user missing permission for a command.

Parameters :

- interaction or message (if bot use slash-commands or not) (type : [Interaction](https://discord.js.org/#/docs/main/stable/class/Interaction) or [Message](https://discord.js.org/#/docs/main/stable/class/Message))
- missing (type : [Array\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>)

### botMissingPermissions

Emitted when bot missing permission for a command.

Parameters :

- interaction or message (if bot use slash-commands or not) (type : [Interaction](https://discord.js.org/#/docs/main/stable/class/Interaction) or [Message](https://discord.js.org/#/docs/main/stable/class/Message))
- missing (type : [Array\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>)

## Events cooldowns

### cooldownLimite

Emitted when command cooldown limit is reached.

Parameters :

- interaction or message (if bot use slash-commands or not) (type : [Interaction](https://discord.js.org/#/docs/main/stable/class/Interaction) or [Message](https://discord.js.org/#/docs/main/stable/class/Message))

## Events interactions

### interactionButtonCreate

Emitted when an interaction button is created.

Parameters :

- interaction (type : [ButtonInteraction](https://discord.js.org/#/docs/main/stable/class/ButtonInteraction))

### interactionCommmandCreate

Emitted when an slash-command is created.

Parameters :

- interaction (type : [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction))

### interactionContextMenuCreate

Emitted when an interaction context menu is created.

Parameters :

- interaction (type : [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction))

### interactionSelectMenuCreate

Emitted when an select menu interaction is created.

Parameters :

- interaction (type : [SelectMenuInteraction](https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction))

### interactionMessageComponentCreate

Emitted when an message component interaction is created.

Parameters :

- interaction (type : [MessageComponentInteraction](https://discord.js.org/#/docs/main/stable/class/MessageComponentInteraction))
