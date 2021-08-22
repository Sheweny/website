# ShewenyClient

The Sheweny framework client.

Parameters :

| Name          | Type                                                                             | Description                                                                 | Default | Optional |
| ------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------- | -------- |
| options       | [ShewenyClientOptions](../typedef/ShewenyClientOptions.md)                       | The options for the client                                                  | None    |          |
| clientOptions | [ClientOptions](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) | The options for the discord.js client (use first parameter if not provided) |         | ✓        |

## Properties

### handlers

The handlers of the client.

Return : [ClientHandlers](../typedef/ClientHandlers.md).

### commands

Commands manager

Return : [ClientCommandsManager](../typedef/ClientCommandsManager.md)

### events

A collection of events or undefined if events are not loadeds

Return : Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Event](../structures/Event.md)> or undefined.

### buttons

A collection of buttons or undefined if buttons are not loadeds

Return : Collection\<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [Button](../structures/Button.md)> or undefined.

### selectMenus

A collection of commands or undefined if select-menus are not loadeds

Return : Collection\<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [SelectMenu](../structures/selectMenu.md)> or undefined.

### inhibitors

A collection of commands or undefined if select-menus are not loadeds

Return : Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Inhibitor](../structures/Inhibitor.md)> or undefined.

## Events

### interactionButtonCreate

Emitted when an interaction button is created.

Parameters :

- interaction (type : [ButtonInteraction](https://discord.js.org/#/docs/main/stable/class/ButtonInteraction))

### interactionCommmandCreate

Emitted when an slash-command is created.

Parameters :

- interaction (type : [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction)))

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
