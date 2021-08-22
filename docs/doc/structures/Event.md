# Event

Represents a event.

| Name    | Type                                                                                              | Description              | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------ | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)                                                      | The client.              | None    |          |
| name    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the event.   | None    |          |
| options | [EventOptions](../typedef/EventOptions.md)                                                        | The options of the event | None    |          |

## Properties

- `client` - The client.
- `path` - The file path of the event.
- `name` - The name of the event.
- `description` - The description of the event.
- `once` - If event is executed once.

## Methods

### before()

Executed before event checks.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ...args | [args Events](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-applicationCommandCreate) | Args for events |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<any> | any

### [abstract] execute()

The execution of event.

Parameters :

| Name        | Type                                                                                                                                                                                     | Description     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ...args | [args Events](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-applicationCommandCreate) | Args for events|

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<any> | any

### unregister()

Unregister a event from the bot.

Return : [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a event of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Event](./Event.md)> | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Null)

### [async] register()

Register the event.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Event](./Event.md)> | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Null)
