# Basic event

With sapphire each Event must be a class which extends from the [Event](../../doc/Events.md) class

## Import Event

Import the [Event](../../doc/guide/classes/Event.md) :

:::: code-group
::: code-group-item CommonJS

```js
const { Event } = require("@sapphire/framework");
```

:::
::: code-group-item ESM

```js
import { Event } from "@sapphire/framework";
```

:::
::::

## Create the Event

### Slash-Event

:::: code-group
::: code-group-item JS CommonJS

```js
const { Event } = require("@sheweny/framework");

export class GuildMemberAdd extends Event {
  constructor(client) {
    super(client, "guildMemberAdd", {
      description: "Member join the guild",
      once: false,
    });
  }
  execute(member) {
    console.log(member);
  }
}
```

:::
::: code-group-item TS ES Modules

```ts
import { Event, ShewenyClient } from "@sheweny/framework";
import type { GuildMember } from "discord.js";

export class GuildMemberAdd extends Event {
  constructor(client: ShewenyClient) {
    super(client, "ping", {
      description: "Ping the bot",
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

### Message Event

:::: code-group
::: code-group-item JS CommonJS

```js
const { Event } = require("@sheweny/framework");

export class GuildMemberAdd extends Event {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      once: false,
    });
  }
  execute(member) {
    console.log(member);
  }
}
```

:::
::: code-group-item TS ES Modules

```ts
import { Event, ShewenyClient } from "@sheweny/framework";
import type { GuildMember } from "discord.js";

export class GuildMemberAdd extends Event {
  constructor(client: ShewenyClient) {
    super(client, "ping", {
      description: "Ping the bot",
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
