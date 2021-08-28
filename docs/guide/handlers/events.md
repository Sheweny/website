# Events handler

Set up an events handler to load and register events.

## Setup in client

When setting up the client, it is possible to set the handler as a parameter :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ShewenyClient } = require("sheweny");
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
import { ShewenyClient } from "sheweny";
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
const { ShewenyClient, EventsManager } = require("sheweny");
const client = new ShewenyClient({ intents: ["GUILDS"] });

const EventsManager = new EventsManager(client, "./events");

EventsManager.loadAll();
```

:::
::: code-group-item TS ES Modules

```ts
import { ShewenyClient, EventsManager } = from "sheweny";
const client = new ShewenyClient({ intents: ["GUILDS"] });

const EventsManager = new EventsManager(client, "./events");

EventsManager.loadAll().then(() => this.registerAll());
```

:::
::::
