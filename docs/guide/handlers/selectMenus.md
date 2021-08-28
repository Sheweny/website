# Select-Menus handler

Set up an select-menus handler to load select-menus interactions events.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("sheweny");

const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    buttons: {
      directory: "./interactions/selectmenus",
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
    buttons: {
      directory: "./interactions/selectmenus",
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
const { ShewenyClient, SelectMenusHandler } = require("sheweny");

const client = new ShewenyClient({ intents: ["GUILDS"] });

const selectMenusHandler = new SelectMenusHandler(
  client,
  "./interactions/selectmenus"
);

selectMenusHandler.loadAll();
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, SelectMenusHandler } = from "sheweny";

const client = new ShewenyClient({ intents: ["GUILDS"] });

const selectMenusHandler = new SelectMenusHandler(client, "./interactions/selectmenus");

selectMenusHandler.loadAll()
```

:::
::::
