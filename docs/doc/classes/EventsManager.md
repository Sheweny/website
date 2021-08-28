# EventsManager

Create an handler for bot events. The events can be in as many subfolders as desired.

| Name      | Type                                                                                                | Description                        | Default | Optional |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| client    | [ShewenyClient](./ShewenyClient.md)                                                                 | The client                         | None    |          |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The directory of events            | None    |          |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If handler load all in constructor | None    | ✓        |

## Properties

- `client` - The client.
- `directory` - The directory of events.
- `events` - A collection of loaded events.

## Methods

### loadAll()

Load all inhibitors in directory of events.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Event](./Event.md)>>

### registerAll()

Register loaded events and register them if no events exist.

Parameters :

| Name   | Type                                                                                                                                             | Description | Default       | Optional |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ------------- | -------- |
| events | Collection\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Event](../structures/Event.md))> | The events  | client.events | ✓        |

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>
