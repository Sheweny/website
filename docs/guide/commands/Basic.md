# Basic command

With sheweny each command must be a class which extends from the [ApplicationCommand](../../doc/structures/Command.md) for slash-commands and context-menus or [MessageCommand](../../doc/structures/MessageCommand.md) for message commands.class

## Import Command

Import the [ApplicationCommand](../../doc/structures/Command.md) or [MessageCommand](../../doc/structures/MessageCommand.md) class:

:::: code-group
::: code-group-item CommonJS

```js
const { ApplicationCommand, MessageCommand } = require("sheweny");
```

:::
::: code-group-item ESM

```js
import { ApplicationCommand, MessageCommand } from "sheweny";
```

:::
::::

## Application Command

### Slash-command

::: tip
Command applications can be: slash-commands or context-menus.
:::

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
  execute(interaction) {
    interaction.reply("Pong !");
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { ApplicationCommand } from "sheweny";
import type { ShewenyClient } from "sheweny";
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
  execute(interaction: CommandInteraction) {
    interaction.reply("Pong !");
  }
}
```

:::
::::

### Context-menu

:::: code-group
::: code-group-item JS CommonJS

```js
const { ApplicationCommand } = require("sheweny");

module.exports = class PingUserCommand extends ApplicationCommand {
  constructor(client) {
    super(
      client,
      {
        name: "ping-user",
        description: "Send ping to a user",
        type: "USER",
      },
      { category: "Misc" }
    );
  }

  execute(interaction) {
    message.channel.send({ content: `Pong <@${interaction.targetId}> !` });
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { ApplicationCommand } from "sheweny";
import type { ShewenyClient } from "sheweny";
import type { ContextMenuInteraction } from "discord.js";

export class PingUserCommand extends ApplicationCommand {
  constructor(client: ShewenyClient) {
    super(
      client,
      {
        name: "ping-user",
        description: "Send ping to a user",
        type: "USER",
      },
      { category: "Misc" }
    );
  }

  execute(interaction: ContextMenuInteraction) {
    message.channel.send({ content: `Pong <@${interaction.targetId}> !` });
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
    });
  }
  
  execute(message: Message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::::
