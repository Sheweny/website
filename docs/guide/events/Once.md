# Once events

Some events can have the once property so that they can fire only once.

:::: code-group
::: code-group-item JS CommonJS

```js
const { Event } = require("sheweny");

module.exports = class Ready extends Event {
  constructor(client) {
    super(client, "ready", {
      description: "Client is logged in",
      once: true,
    });
  }
  execute(client) {
    console.log("The client is logged in");
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Event, ShewenyClient } from "sheweny";
import type { Client } from "discord.js";

export class Ready extends Event {
  constructor(client: ShewenyClient) {
    super(client, "ready", {
      description: "Client is logged in",
      once: true,
    });
  }
  execute(client: Client) {
    console.log("The client is logged in");
  }
}
```

:::
::::
