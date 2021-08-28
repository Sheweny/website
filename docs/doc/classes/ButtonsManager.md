# ButtonsManager

Create an handler for bot buttons. The buttons can be in as many subfolders as desired.

| Name      | Type                                                                                                | Description                        | Default | Optional |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| client    | [ShewenyClient](./ShewenyClient.md)                                                                 | The client                         | None    | ✓        |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The directory of buttons           | None    |          |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If handler load all in constructor | None    | ✓        |

## Properties

- `client` - The client.
- `directory` - The directory of buttons.
- `buttons` - A collection of loaded buttons.

## Methods

### loadAll()

Load all buttons in directory of buttons.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [Button](../structures/Button.md)>>
