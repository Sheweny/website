# ManagerOptions

## BaseManagerOptions

| Name      | Type                                                                                          | Description                        |
| --------- | --------------------------------------------------------------------------------------------- | ---------------------------------- |
| directory | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | The main directory of the commands |
| loadAll   | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the framework will load all     |

## CommandsManagerOptions

| Name                            | Type                                                                                                                                                                                                                                                                                    | Description                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| default                         | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                             | The main directory of the commands                                                      |
| directory                       | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                             | The main directory of the commands                                                      |
| loadAll                         | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                           | If the framework will load all                                                          |
| guildId                         | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) or [Array](hthttps://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | The guild to register commands                                                          |
| prefix                          | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                             | The prefix for the bot                                                                  |
| applicationPermissions          | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                           | If the permissions for app commands must be required (only available if guildId is set) |
| autoRegisterApplicationCommands | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                           | If the application commands must be registered                                          |

## EventsManagerOptions

| Name      | Type                                                                                          | Description                                    |
| --------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| default   | [EventManagerDefaultOption](./ManagersDefaultOptions.md#eventsmanagerdefaultoptions)          | If the application commands must be registered |
| directory | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | The main directory of the commands             |
| loadAll   | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the framework will load all                 |

## InhibitorsManagerOptions

| Name                            | Type                                                                                          | Description                                    |
| ------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| default                         | [InhibitorManagerDefaultOption](./ManagersDefaultOptions.md#inhibitorsmanagerdefaultoptions)  | If the application commands must be registered |
| directory                       | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | The main directory of the commands             |
| autoRegisterApplicationCommands | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the application commands must be registered |
