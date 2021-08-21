# Event

Represents a event.

| Name    | Type                                                                                              | Description              | Default | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------ | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)                                                      | The client.              | None    | Yes      |
| name    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the event.   | None    | Yes      |
| options | [EventOptions](../typedef/EventOptions.md)                                                        | The options of the event | None    | Yes      |

## Properties

- `client` - The client.
- `path` - The file path of the event.
- `name` - The name of the event.
- `description` - The description of the event.
- `once` - If event is executed once.

## Methods

### unregister()

Unregister a event from the bot.

Return true

### [async] reload()

Reload a event of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Event](.)> or null

### [async] register()

Register the event.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Event](.)> or null
