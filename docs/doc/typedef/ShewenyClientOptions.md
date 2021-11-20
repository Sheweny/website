# ShewenyClientOptions

Extends ClientOptions (discord.js type)

| Name                | Type                                                                                                                                                                                    | Description                          | Default     | Optional |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- | -------- |
| admins              | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | Ids of bot admins                    | None        | ✓        |
| mode                | development or production                                                                                                                                                               | The mode for run application         | development | ✓        |
| joinThreadsOnCreate | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                           | If bot should join threads on create | false       | ✓        |
| managers            | [ClientManagersOptions](#clientmanagersoptions)                                                                                                                                         | The options for the managers         |             | ✓        |

## ClientManagersOptions

| Name        | Type                                                 | Description                 |
| ----------- | ---------------------------------------------------- | --------------------------- |
| commands    | [CommandManagerOptions](./CommandsManagerOptions.md) | The options for the manager |
| events      | [BaseManagerOptions](./BaseManagerOptions.md)        | The options for the manager |
| buttons     | [BaseManagerOptions](./BaseManagerOptions.md)        | The options for the manager |
| selectMenus | [BaseManagerOptions](./BaseManagerOptions.md)        | The options for the manager |
| inhibitors  | [BaseManagerOptions](./BaseManagerOptions.md)        | The options for the manager |
