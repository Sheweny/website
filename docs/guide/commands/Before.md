# Before command

## Slash-command

The `before` fuction is executed before all checks like cooldowns, permissions, inhibitors etc.

### Example :

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("sheweny");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "Ping the bot",
      category: "Misc",
      type: "SLASH_COMMAND",
    });
  }

  before(interaction) {
    // Action before all checks
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
    super(client, {
      name: "ping",
      description: "Ping the bot",
      category: "Misc",
      type: "SLASH_COMMAND",
    });
  }

  before(interaction: CommandInteraction) {
    // Action before all checks
  }

  execute(interaction: CommandInteraction) {
    interaction.reply({ content: "Pong !" });
  }
}
```

:::
::::

## Message command

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("sheweny");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "Ping the bot",
      category: "Misc",
      type: "MESSAGE_COMMAND",
      cooldown: 5, // cooldown 5 seconds
    });
  }

  before(message) {
    // Action before all checks
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
    super(client, {
      name: "ping",
      description: "Ping the bot",
      category: "Misc",
      type: "MESSAGE_COMMAND",
      cooldown: 5, // cooldown 5 seconds
    });
  }

  before(message: Message) {
    // Action before all checks
  }

  execute(message: Message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::::

::: warning
The before function cannot prevent the execution of the command.  
If you want to add checks to the commands use the [inhibitors](../inhibitors/Inhibitor.md).
:::
