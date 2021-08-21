# Once events

Some events can have the once property so that they can fire only once.

:::: code-group
::: code-group-item JS CommonJS

```js
const { Event } = require("@sheweny/framework");

module.exports = class Ready extends Event {
  constructor(client) {
    super(client, "ready", {
      description: "Client is logged in",
      once: true,
    });
  }
  execute(client) {
    console.log(`Logged in as ${client.user.tag}!`);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Event, ShewenyClient } from "@sheweny/framework";
import type { Client } from "discord.js";

export class Ready extends Event {
  constructor(client: ShewenyClient) {
    super(client, "ready", {
      description: "Client is logged in",
      once: true,
    });
  }
  execute(client: Client) {
    console.log(`Logged in as ${client.user.tag}!`);
  }
}
```

:::
::::
