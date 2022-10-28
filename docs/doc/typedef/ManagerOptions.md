# ManagerOptions

## BaseManagerOptions

| Name      | Type                                                                                          | Description                                  |
| --------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| asyncRead | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to read files async (<= V4.1.0 only) |
| directory | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | The main directory of the commands           |
| default   | [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The default cooldown                         |

## ButtonsManagerOptions

| Name      | Type                                                                                          | Description                                  |
| --------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| asyncRead | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to read files async (<= V4.1.0 only) |
| cooldown  | [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The default cooldown                         |

## CommandsManagerOptions

| Name                            | Type                                                                                                                                                                                                                                                                                  | Description                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| applicationPermissions          | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                         | If the permissions for app commands must be required (only available if guildId is set) |
| autoRegisterApplicationCommands | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                         | If the application commands must be registered                                          |
| asyncRead                       | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                         | Whether to read files async (<= V4.1.0 only)                                            |
| default                         | [CommandsManagerDefaultOption](./ManagersDefaultOptions.md#commandsmanagerdefaultoptions)                                                                                                                                                                                             | The main directory of the commands                                                      |
| directory                       | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                           | The main directory of the commands                                                      |
| guildId                         | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) or [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | The guild to register commands                                                          |
| prefix                          | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                           | The prefix for the bot                                                                  |
| registerStrategy                | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)<"set" \| "create">                                                                                                                                                                        | The strategy to register commands                                                       |

## EventsManagerOptions

| Name      | Type                                                                                          | Description                                    |
| --------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| asyncRead | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to read files async (<= V4.1.0 only)   |
| default   | [EventsManagerDefaultOption](./ManagersDefaultOptions.md#eventsmanagerdefaultoptions)         | If the application commands must be registered |
| directory | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | The main directory of the commands             |

## InhibitorsManagerOptions

| Name      | Type                                                                                          | Description                                    |
| --------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| asyncRead | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to read files async (<= V4.1.0 only)   |
| default   | [InhibitorsManagerDefaultOption](./ManagersDefaultOptions.md#inhibitorsmanagerdefaultoptions) | If the application commands must be registered |
| directory | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)   | The main directory of the commands             |

## ModalsManagerOptions

| Name      | Type                                                                                          | Description                                  |
| --------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| asyncRead | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to read files async (<= V4.1.0 only) |
| cooldown  | [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The default cooldown                         |

## SelectMenuOptions

| Name      | Type                                                                                          | Description                                  |
| --------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| asyncRead | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to read files async (<= V4.1.0 only) |
| cooldown  | [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The default cooldown                         |
