# Command restrictions

You can add restrictions to prevent a command from being executed on a guild or in DMs

## Guild channel with slash-commands

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("sheweny");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client {
      name: "ping",
      description: "Ping the bot",
      type: "SLASH_COMMAND",
      category: "Misc",
      channel: "GUILD", // The command cannot be executing in DMs
    });
  }

  execute(interaction) {
    interaction.reply({ content: "Pong !" });
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Command } from "sheweny";
import type { ShewenyClient } from "sheweny";
import type { CommandInteraction } from "discord.js";

export class PingCommand extends Command {
  constructor(client: ShewenyClient) {
    super(client {
      name: "ping",
      description: "Ping the bot",
      type: "SLASH_COMMAND",
      category: "Misc",
      channel: "GUILD", // The command cannot be executing in DMs
    });
  }

  execute(interaction: CommandInteraction) {
    interaction.reply({ content: "Pong !" });
  }
}
```

:::
::::

## DMs channel with message-commands

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("sheweny");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client {
      name: "ping",
      description: "Ping the bot",
      type: "MESSAGE_COMMAND",
      category: "Misc",
      channel: "DM", // The command cannot be executing in DMs
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
import { Command } from "sheweny";
import type { ShewenyClient } from "sheweny";
import type { Message } from "discord.js";

export class PingCommand extends Command {
  constructor(client: ShewenyClient) {
    super(client {
      name: "ping",
      description: "Ping the bot",
      type: "MESSAGE_COMMAND",
      category: "Misc",
      channel: "DM", // The command cannot be executing in DMs
    });
  }
  execute(message: Message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::::
