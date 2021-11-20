# ShewenyClientOptions

Extends ClientOptions (discord.js type)

| Name                | Type                                                                                                                                                                                    | Description                          | Default     | Optional |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- | -------- |
| admins              | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | Ids of bot admins                    | None        | ✓        |
| mode                | development or production                                                                                                                                                               | The mode for run application         | development | ✓        |
| joinThreadsOnCreate | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                           | If bot should join threads on create | false       | ✓        |
| handlers            | [ClientHandlersOptions](#clienthandlersoptions)                                                                                                                                         | The options for the handlers         |             | ✓        |

## ClientHandlersOptions

| Name        | Type                                                 | Description                 |
| ----------- | ---------------------------------------------------- | --------------------------- |
| commands    | [CommandManagerOptions](./CommandsManagerOptions.md) | The options for the handler |
| events      | [BaseManagerOptions](./BaseManagerOptions.md)        | The options for the handler |
| buttons     | [BaseManagerOptions](./BaseManagerOptions.md)        | The options for the handler |
| selectMenus | [BaseManagerOptions](./BaseManagerOptions.md)        | The options for the handler |
| inhibitors  | [BaseManagerOptions](./BaseManagerOptions.md)        | The options for the handler |
