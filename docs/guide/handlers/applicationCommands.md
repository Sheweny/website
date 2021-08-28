# ApplicationCommands handler

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
    applicationCommands: {
      directory: "./commands",
      guildId: "877090306103840778", // Register commands and context-menus in this guild
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
    applicationCommands: {
      directory: "./commands",
      guildId: "877090306103840778", // Register commands and context-menus in this guild
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
const {
  ShewenyClient,
  ApplicationCommandHandler,
} = require("sheweny");

const client = new ShewenyClient({ intents: ["GUILDS"] });

const applicationHandler = new ApplicationCommandHandler(client, "./commands");

applicationHandler.loadAll().then(() => {
  applicationHandler.registerCommands(
    client.commands.interaction,
    "877090306103840778"
  );
});
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, ApplicationCommandHandler } = from "sheweny";
const client = new ShewenyClient({ intents: ["GUILDS"] });

const applicationHandler = new ApplicationCommandHandler(client, "./commands");

applicationHandler.loadAll().then(() => {
  applicationHandler.registerCommands(
    client.commands.interaction,
    "877090306103840778"
  );
});
```

:::
::::
