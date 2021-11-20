# Commands handler

Set up an application commands handler to load and register interactions.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("sheweny");

const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    commands: {
      directory: "./commands",
      guildId: "877090306103840778", // Register commands and context-menus in this guild
      prefix: "!",
      applicationPermissions: false,
    },
  },
});
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient } from "sheweny";

const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    commands: {
      directory: "./commands",
      guildId: "877090306103840778", // Register commands and context-menus in this guild
      prefix: "!",
      applicationPermissions: false,
    },
  },
});
```

:::
::::

## Setup with class

You can also use the class to set up the handler somewhere else :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient, CommandsManager } = require("sheweny");

const client = new ShewenyClient({ intents: ["GUILDS"] });

const commandsHandler = new CommandsManager(client, "./commands", {
  prefix: "!",
});

commandsHandler.loadAll().then(() => {
  commandsHandler.registerApplicationCommands(
    client.collections.commands,
    "877090306103840778"
  );
});
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, CommandsManager } = from "sheweny";
const client = new ShewenyClient({ intents: ["GUILDS"] });

const commandsHandler = new CommandsManager(client, "./commands", {prefix: "!"});

commandsHandler.loadAll().then(() => {
  commandsHandler.registerApplicationCommands(
    client.collections.commands,
    "877090306103840778"
  );
});
```

:::
::::
