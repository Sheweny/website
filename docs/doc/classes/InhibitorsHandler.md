# InhibitorsHandler

Create an handler for bot inhibitors. The inhibitors can be in as many subfolders as desired.

| Name      | Type                                                                                                | Description                        | Default | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The directory of inhibitors        | None    | Yes      |
| client    | [ShewenyClientOptions](./ShewenyClient.md)                                                          | The client                         | None    | No       |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If handler load all in constructor | None    | No       |

## Properties

### client

The client of framework.

Return : [ShewenyClientOptions](./ShewenyClient.md)

### directory

The directory of inhibitors.

Return : String

## Methods

### loadAll()

Load all inhibitors in directory of inhibitors.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [Inhibitor](../structures/Inhibitor.md)>>
