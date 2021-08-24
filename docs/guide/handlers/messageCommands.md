# MessageCommands handler

Set up an message commands handler to load message commands.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("sheweny");

const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    messageCommands: {
      directory: "./commands",
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
    messageCommands: {
      directory: "./commands",
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
const { ShewenyClient, MessageCommandsHandler } = require("sheweny");

const client = new ShewenyClient({ intents: ["GUILDS"] });

const messageCommandsHandler = new MessageCommandsHandler(client, "./commands");

messageCommandsHandler.loadAll();
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, MessageCommandsHandler } = from "sheweny";

const client = new ShewenyClient({ intents: ["GUILDS"] });

const messageCommandsHandler = new MessageCommandsHandler(client, "./commands");

messageCommandsHandler.loadAll()
```

:::
::::
