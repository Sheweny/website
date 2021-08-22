# Button

Represents a button.

| Name     | Type                                                                                                                                                                                               | Description             | Default | Optional |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------- | -------- |
| client   | [ShewenyClient](./ShewenyClient.md)                                                                                                                                                                | The client.             | None    |          |
| customId | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | The list of buttons ids | None    |          |

## Properties

- `client` - The client.
- `path` - The file path of the button.
- `customId` - Array of customIds.

## Methods

### unregister()

Unregister a button from the bot.

Return : [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a button of bot.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Button](.)> or null

### [async] register()

Register the button.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Button](.)> or null
