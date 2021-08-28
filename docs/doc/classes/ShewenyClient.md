# ShewenyClient

The Sheweny framework client.

Parameters :

| Name          | Type                                                                             | Description                                                                 | Default | Optional |
| ------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------- | -------- |
| options       | [ShewenyClientOptions](../typedef/ShewenyClientOptions.md)                       | The options for the client                                                  | None    |          |
| clientOptions | [ClientOptions](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) | The options for the discord.js client (use first parameter if not provided) |         | ✓        |

## Properties

### util

Functions for resolve data.

Return : [DiscordResolve](../typedef/DiscordResolve.md).

### handlers

The handlers of the client.

Return : [ClientHandlers](../typedef/ClientHandlers.md).

### collections

The collections of commands, events, buttons, select-menus, inhibitors.

Return : [ClientCollections](../typedef/ClientCollections.md)

## Methods

### awaitReady

Wait for the client to be ready.

Return Promise\<void>

## Events

### interactionButtonCreate

Emitted when an interaction button is created.

Parameters :

- interaction (type : [ButtonInteraction](https://discord.js.org/#/docs/main/stable/class/ButtonInteraction))

### interactionCommmandCreate

Emitted when an Slash Command or Context Menu is created.

Parameters :

- interaction (type : [CommandInteraction](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) or [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction)))

### interactionContextMenuCreate

Emitted when an interaction Context Menu is created.

Parameters :

- interaction (type : [ContextMenuInteraction](https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction))

### interactionSelectMenuCreate

Emitted when an Select Menu interaction is created.

Parameters :

- interaction (type : [SelectMenuInteraction](https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction))

### interactionMessageComponentCreate

Emitted when an Message Component interaction is created.

Parameters :

- interaction (type : [MessageComponentInteraction](https://discord.js.org/#/docs/main/stable/class/MessageComponentInteraction))
