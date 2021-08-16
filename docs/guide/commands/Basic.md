# Basic command

With sapphire each command must be a class which extends from the [Command](../../doc/Command.md) class

## Import Command

Import the [Command](../../doc/guide/classes/Command.md) :

:::: code-group
::: code-group-item CommonJS

```js
const { Command } = require("@sapphire/framework");
```

:::
::: code-group-item ESM

```js
import { Command } from "@sapphire/framework";
```

:::
::::

## Create the command

### Slash-command

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("@sheweny/framework");

export class PingCommand extends Command {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
    });
  }
  execute(interaction) {
    interaction.reply("Pong !");
  }
}
```

:::
::: code-group-item TS ES Modules

```ts
import { Command, ShewenyClient } from "@sheweny/framework";
import type { CommandInteraction } from "discord.js";

export class PingCommand extends Command {
  constructor(client: ShewenyClient) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
    });
  }
  execute(interaction: CommandInteraction) {
    interaction.reply("Pong !");
  }
}
```

:::
::::

### Message command

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("@sheweny/framework");

export class PingCommand extends Command {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
    });
  }
  execute(message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::: code-group-item TS ES Modules

```ts
import { Command, ShewenyClient } from "@sheweny/framework";
import type { Message } from "discord.js";

export class PingCommand extends Command {
  constructor(client: ShewenyClient) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
    });
  }
  execute(message: Message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::::
