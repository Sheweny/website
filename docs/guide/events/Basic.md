# Basic event

With sheweny each Event must be a class which extends from the [Event](../../doc/structures/Event.md) class

## Import Event

Import the [Event](../../doc/structures/Event.md) class :

:::: code-group
::: code-group-item CommonJS

```js
const { Event } = require("sheweny");
```

:::
::: code-group-item ESM

```js
import { Event } from "sheweny";
```

:::
::::

## Create the Event

### guildMemberAdd Event

:::: code-group
::: code-group-item JS CommonJS

```js
const { Event } = require("sheweny");

module.exports = class GuildMemberAdd extends Event {
  constructor(client) {
    super(client, "guildMemberAdd", {
      description: "Member join the guild",
      once: false,
    });
  }
  execute(member) {
    console.log(member);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Event, ShewenyClient } from "sheweny";
import type { GuildMember } from "discord.js";

export class GuildMemberAdd extends Event {
  constructor(client: ShewenyClient) {
    super(client, "guildMemberAdd", {
      description: "Member join the guild",
      once: false,
    });
  }
  execute(member: GuildMember) {
    console.log(member);
  }
}
```

:::
::::

### Message event

:::: code-group
::: code-group-item JS CommonJS

```js
const { Event } = require("sheweny");

module.exports = class Message extends Event {
  constructor(client) {
    super(client, "messageCreate", {
      description: "Message has created",
      once: false,
    });
  }
  execute(message) {
    console.log(message);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Event, ShewenyClient } from "sheweny";
import type { Message } from "discord.js";

export class GuildMemberAdd extends Event {
  constructor(client: ShewenyClient) {
    super(client, "messageCreate", {
      description: "Message has created",
      once: false,
    });
  }
  execute(message: Message) {
    console.log(message);
  }
}
```

:::
::::
