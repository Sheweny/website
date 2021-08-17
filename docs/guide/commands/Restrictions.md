# Command cooldown

You can add restrictions to prevent a command from being executed on a guild or in DMs

## Guild only with slash-commands

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("@sheweny/framework");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
      guildOnly: true, // The command cannot be executing in DMs
    });
  }
  execute(interaction) {
    interaction.reply("Pong !");
  }
};
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
      guildOnly: true, // The command cannot be executing in DMs
    });
  }
  execute(interaction: CommandInteraction) {
    interaction.reply("Pong !");
  }
}
```

:::
::::

## DMs only with message-commands

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("@sheweny/framework");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
      DMOnly: true, // The command cannot be executing in DMs
    });
  }
  execute(message) {
    message.channel.send({ content: "Pong !" });
  }
};
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
      DMOnly: true, // The command cannot be executing in DMs
    });
  }
  execute(message: Message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::::
