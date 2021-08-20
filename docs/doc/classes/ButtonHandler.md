# ButtonsHandler

Create an handler for bot buttons. The buttons can be in as many subfolders as desired.

| Name        | Type                                                                                                | Description                        | Default | Required |
| ----------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| directory   | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The directory of buttons           | None    | Yes      |
| client      | [ShewenyClientOptions](./ShewenyClient.md)                                                          | The client                         | None    | No       |
| registerAll | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If handler load all in constructor | None    | No       |

## Properties

### client

The client of framework.

Return : [ShewenyClientOptions](./ShewenyClient.md)

### directory

The directory of buttons.

Return : String

## Methods

### registerAll()

Load all buttons in directory of buttons.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [Button](../structures/Button.md)>>
