# Inhibitors handler

Set up an inhibitors handler to load inhibitors.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("@sheweny/framework");
const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    inhibitors: {
      directory: "./inhibitors",
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
    inhibitors: {
      directory: "./inhibitors",
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
const { ShewenyClient, InhibitorsHandler } = require("@sheweny/framework");
const client = new ShewenyClient({ intents: ["GUILDS"] });

const inhibitorsHandler = new InhibitorsHandler(client, "./inhibitors");

inhibitorsHandler.loadAll();
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, InhibitorsHandler } = from "@sheweny/framework";
const client = new ShewenyClient({ intents: ["GUILDS"] });

const inhibitorsHandler = new InhibitorsHandler(client, "./inhibitors");

inhibitorsHandler.loadAll()
```

:::
::::
