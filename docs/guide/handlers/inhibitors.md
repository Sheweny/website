# Inhibitors handler

Set up an inhibitors handler to load inhibitors.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("sheweny");
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
import { ShewenyClient } from "sheweny";
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
const { ShewenyClient, InhibitorsManager } = require("sheweny");
const client = new ShewenyClient({ intents: ["GUILDS"] });

const InhibitorsManager = new InhibitorsManager(client, "./inhibitors");

InhibitorsManager.loadAll();
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, InhibitorsManager } = from "sheweny";
const client = new ShewenyClient({ intents: ["GUILDS"] });

const InhibitorsManager = new InhibitorsManager(client, "./inhibitors");

InhibitorsManager.loadAll()
```

:::
::::
