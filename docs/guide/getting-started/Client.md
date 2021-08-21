# Create the client

## Import ShewenyClient

Import the [ShewenyClient](../../doc/classes/ShewenyClient.md) class from library.

### Using CommonJS syntax

```js
const { ShewenyClient } = require("@sheweny/framework");
```

### Using ES modules syntax

```js
import { ShewenyClient } from "@sheweny/framework";
```

## Create new instance of client

Create a new instance of [ShewenyClient](../../doc/classes/ShewenyClient.md) with [ShewenyClientOptions](../../doc/typedef/ShewenyClientOptions.md)

```js
const client = new ShewenyClient({
  intents: ["GUILDS", "GUILDS_MESSAGES"],
  admins: ["611468402263064577"], // Admins permissions for the bot
  handlers: {
    commands: {
      type: "SLASH_COMMANDS", // Use slash-commands instead of message commands (MESSAGE_COMMANDS)
      directory: "./commands",
    },
  },
});
```

::: warning
The `intents` options is required with discord.js V13.0.0 or higher.
:::
