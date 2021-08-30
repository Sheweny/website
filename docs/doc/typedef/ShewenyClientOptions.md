# ShewenyClientOptions

Extends ClientOptions (discord.js type)

| Name                | Type                                                                                                      | Description                          | Default    | Optional |
| ------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- | -------- |
| admins              | Array\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | Ids of bot admins                    | None       | ✓        |
| mode                | development or production                                                                                 | The mode for run application         | production | ✓        |
| joinThreadsOnCreate | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)       | If bot should join threads on create | false      | ✓        |
| handlers            | [ClientHandlersOptions](./ClientHandlersOptions.md)                                                       | The options for the handlers         |            | ✓        |
