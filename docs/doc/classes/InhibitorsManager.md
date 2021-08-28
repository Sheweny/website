# InhibitorsManager

Create an handler for bot inhibitors. The inhibitors can be in as many subfolders as desired.

| Name      | Type                                                                                                | Description                        | Default | Optional |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | ------- | -------- |
| client    | [ShewenyClient](./ShewenyClient.md)                                                                 | The client                         | None    | ✓        |
| directory | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The directory of inhibitors        | None    |          |
| loadAll   | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If handler load all in constructor | None    | ✓        |

## Properties

- `client` - The client.
- `directory` - The directory of inhibitors.
- `inhibitors` - A collection of loaded inhibitors.

## Methods

### loadAll()

Load all inhibitors in directory of inhibitors.

Return : [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<Collection\<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>, [Inhibitor](../structures/Inhibitor.md)>>
