# Buttons handler

Set up an buttons handler to load buttons interactions events.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("@sheweny/framework");
const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    buttons: {
      directory: "./interactions/buttons",
    },
  },
});
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient } from "@sheweny/framework";
const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    buttons: {
      directory: "./interactions/buttons",
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
const { ShewenyClient, ButtonsHandler } = require("@sheweny/framework");
const client = new ShewenyClient({ intents: ["GUILDS"] });

const buttonsHandler = new ButtonsHandler(client, "./interactions/buttons");

buttonsHandler.loadAll();
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, ButtonsHandler } = from "@sheweny/framework";
const client = new ShewenyClient({ intents: ["GUILDS"] });

const buttonsHandler = new ButtonsHandler(client, "./interactions/buttons");

buttonsHandler.loadAll()
```

:::
::::
