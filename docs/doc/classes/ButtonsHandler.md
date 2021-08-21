# ButtonsHandler

Create an handler for bot buttons. The buttons can be in as many subfolders as desired.

| Name      | Type                                                                                                    | Description                        | Default | Required |
| --------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)       | The directory of buttons           | None    | Yes      |
| client    | [ShewenyClient](./ShewenyClient.md) or [Client](https://discord.js.org/#/docs/main/stable/class/Client) | The client                         | None    | No       |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)     | If handler load all in constructor | None    | No       |

## Properties

### client

The client of framework.

Return : [ShewenyClient](./ShewenyClient.md) or [Client](https://discord.js.org/#/docs/main/stable/class/Client)

### directory

The directory of buttons.

Return : String

## Methods

### loadAll()

Load all buttons in directory of buttons.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [Button](../structures/Button.md)>>
