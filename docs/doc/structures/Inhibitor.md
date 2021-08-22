# Inhibitor

Represents a inhibitor.

| Name    | Type                                                                                              | Description                  | Default | Optional |
| ------- | ------------------------------------------------------------------------------------------------- | ---------------------------- | ------- | -------- |
| client  | [ShewenyClient](../classes/ShewenyClient.md)                                                      | The client.                  | None    |          |
| name    | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the inhibitor.   | None    |          |
| options | [InhibitorOptions](../typedef/InhibitorOptions.md)                                                | The options of the inhibitor | None    |          |

## Properties

- `client` - The client.
- `path` - The file path of the event.
- `name` - The name of the event.
- `type` - The type of the inhibitor.
- `priority` - The priority of the inhibitor.

## Methods

### unregister()

Unregister a inhibitor from the bot.

Return true

### [async] reload()

Reload a inhibotor.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Inhibitor](.)> or null

### [async] register()

Register the inhibotor.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Inhibitor](.)> or null
