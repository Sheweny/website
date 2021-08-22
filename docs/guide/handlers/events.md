# Events handler

Set up an events handler to load and register events.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("@sheweny/framework");
const client = new ShewenyClient({
  intents: ["GUILDS"],
  handlers: {
    events: {
      directory: "./events",
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
    events: {
      directory: "./events",
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
const { ShewenyClient, EventsHandler } = require("@sheweny/framework");
const client = new ShewenyClient({ intents: ["GUILDS"] });

const eventsHandler = new EventsHandler(client, "./events");

eventsHandler.loadAll();
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, EventsHandler } = from "@sheweny/framework";
const client = new ShewenyClient({ intents: ["GUILDS"] });

const eventsHandler = new EventsHandler(client, "./events");

eventsHandler.loadAll().then(() => this.registerAll());
```

:::
::::
