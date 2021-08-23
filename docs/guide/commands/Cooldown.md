# Command cooldown

Create cooldown in a command with the cooldown property in the constructor.

::: tip
The cooldown value is in seconds and it type is `number`
:::

## Slash-command

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
        cooldown: 5, // cooldown 5 seconds
      }
    );
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
        cooldown: 5, // cooldown 5 seconds
      }
    );
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
  execute(message: Message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::::

::: warning
After a restart of the bot the cooldowns are not kept
:::
