# Custom emitter

You can choose an other emitter than the client.

We can specify an emitter of type [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) of Node.js.

:::: code-group
::: code-group-item JS CommonJS

```js
const { Event } = require("sheweny");

module.exports = class Ready extends Event {
  constructor(client) {
    super(client, "uncaughtException", {
      emitter: process,
    });
  }
  execute(ctx) {
    console.log("Woops... An uncaughtException error occured :");
    console.log(ctx);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Event } from "sheweny";
import type { ShewenyClient } from "sheweny";

export default class Ready extends Event {
  constructor(client: ShewenyClient) {
    super(client, "uncaughtException", {
      emitter: process,
    });
  }
  execute(ctx: any) {
    console.log("Woops... An uncaughtException error occured :");
    console.log(ctx);
  }
}
```

:::
::::
