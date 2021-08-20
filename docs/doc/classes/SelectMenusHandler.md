# SelectMenuHandler

Create an handler for bot select-menus. The select-menus can be in as many subfolders as desired.

| Name      | Type                                                                                                | Description                        | Default | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The directory of select-menus      | None    | Yes      |
| client    | [ShewenyClientOptions](./ShewenyClient.md)                                                          | The client                         | None    | No       |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If handler load all in constructor | None    | No       |

## Properties

### client

The client of framework.

Return : [ShewenyClientOptions](./ShewenyClient.md)

### directory

The directory of select-menus.

Return : String

## Methods

### loadAll()

Load all select-menus in directory of select-menus.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [SelectMenu](../structures/SelectMenu.md)>>
