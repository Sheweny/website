# Before command

## Application command

The `before` fuction is executed before all checks like cooldowns, permissions, inhibitors etc.

### Example :

:::: code-group
::: code-group-item JS CommonJS

```js
const { ApplicationCommand } = require("sheweny");

module.exports = class PingCommand extends ApplicationCommand {
  constructor(client) {
    super(
      client,
      {
        name: "ping",
        description: "Ping the bot",
      },
      {
        category: "Misc",
      }
    );
  }
  before(interaction) {
    // Action before all checks
  }
  execute(interaction) {
    interaction.reply("Pong !");
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { ApplicationCommand, ShewenyClient } from "sheweny";
import type { CommandInteraction } from "discord.js";

export class PingCommand extends ApplicationCommand {
  constructor(client: ShewenyClient) {
    super(
      client,
      {
        name: "ping",
        description: "Ping the bot",
      },
      {
        category: "Misc",
      }
    );
  }
  before(interaction: CommandInteraction) {
    // Action before all checks
  }
  execute(interaction: CommandInteraction) {
    interaction.reply("Pong !");
  }
}
```

:::
::::

## Message command

:::: code-group
::: code-group-item JS CommonJS

```js
const { MessageCommand } = require("sheweny");

module.exports = class PingCommand extends MessageCommand {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
      cooldown: 5, // cooldown 5 seconds
    });
  }
  before(interaction) {
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
import { MessageCommand, ShewenyClient } from "sheweny";
import type { Message } from "discord.js";

export class PingCommand extends MessageCommand {
  constructor(client: ShewenyClient) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
      cooldown: 5, // cooldown 5 seconds
    });
  }
  before(interaction: CommandInteraction) {
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
