# EventsHandler

Create an handler for bot events. The events can be in as many subfolders as desired.

| Name      | Type                                                                                                    | Description                        | Default | Required |
| --------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| client    | [ShewenyClient](./ShewenyClient.md) or [Client](https://discord.js.org/#/docs/main/stable/class/Client) | The client                         | None    | Yes      |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)       | The directory of events            | None    | Yes      |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)     | If handler load all in constructor | None    | No       |

## Properties

### EventsHandler.client

The client of framework.

Return : [ShewenyClient](./ShewenyClient.md) or [Client](https://discord.js.org/#/docs/main/stable/class/Client)

### EventsHandler.directory

The directory of events.

Return : String

## Methods

### EventsHandler#loadAll()

Regsiter all events in client.events Collection.

Return promise Collection\<string, [Event](./Event.md)>

### EventsHandler#regieterAll()

Register loaded events and register them if no events exist.

Parameters :

| Name   | Type                                                                                                                                                 | Description | Default       | Optional |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------- | -------- |
| events | Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Command](../structures/Command.md))> | The events  | client.events | ✓        |

Return Promise\<undefined>
