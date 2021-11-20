# Button

Represents a button.

## Constructor

```js
new Button(client, options);
```

| Name     | Type                                                                                                                                                                                    | Description             | Default | Optional |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------- | -------- |
| client   | [ShewenyClient](./ShewenyClient.md)                                                                                                                                                     | The client.             | None    | No       |
| customId | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | The list of buttons ids | None    | No       |

:::details Properties

- [client](#client)
- [path](#path)
- [customId](#customid)

:::

:::details Methods

- [before](#before)
- [execute](#abstract-execute)
- [unregister](#unregister)
- [reload](#async-reload)
- [register](#async-register)

:::

## Properties

### client

The framework client.

Return : [ShewenyClient](../client/ShewenyClient.md)

### path

The path of the file.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### customId

The custom id(s) of the button.

Return : [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Methods

### before()

Executed before button(s) checks.

Parameters :

| Name        | Type                                                                                   | Description     |
| ----------- | -------------------------------------------------------------------------------------- | --------------- |
| interaction | [ButtonInteraction](https://discord.js.org/#/docs/main/stable/class/ButtonInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### [abstract] execute()

The execution of button(s).

Parameters :

| Name        | Type                                                                                   | Description     |
| ----------- | -------------------------------------------------------------------------------------- | --------------- |
| interaction | [ButtonInteraction](https://discord.js.org/#/docs/main/stable/class/ButtonInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### unregister()

Unregister a button from the bot.

Return : [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a button of bot.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[Button](./Button.md)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Null)

### [async] register()

Register the button.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[Button](./Button.md)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Null)
