# Basic command

With sheweny each command must be a class which extends from the [Command](../../doc/structures/Command.md) for commands ans context-menus.

## Import Command

Import the [Command](../../doc/structures/Command.md)

:::: code-group
::: code-group-item CommonJS

```js
const { Command } = require("sheweny");
```

:::
::: code-group-item ESM

```js
import { Command } from "sheweny";
```

:::
::::

## Slash-command

::: tip
Command applications can be: slash-commands or context-menus.
:::

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("sheweny");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      type: "SLASH_COMMAND",
      description: "Ping the bot",
      category: "Misc",
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
    super(client, {
      name: "ping",
      description: "Ping the bot",
      type: "SLASH_COMMAND",
      category: "Misc",
    });
  }
  execute(interaction: CommandInteraction) {
    interaction.reply({ content: "Pong !" });
  }
}
```

:::
::::

### Context-menu

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("sheweny");

module.exports = class PingUserCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping-user",
      description: "Send ping to a user",
      type: "CONTEXT_MENU_USER",
      category: "Misc",
    });
  }

  execute(interaction) {
    interaction.reply({ content: `Pong <@${interaction.targetId}> !` });
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Command } from "sheweny";
import type { ShewenyClient } from "sheweny";
import type { ContextMenuInteraction } from "discord.js";

export class PingUserCommand extends Command {
  constructor(client: ShewenyClient) {
    super(client, {
      name: "ping-user",
      description: "Send ping to a user",
      type: "CONTEXT_MENU_USER",
      category: "Misc",
    });
  }

  execute(interaction: ContextMenuInteraction) {
    interaction.reply({ content: `Pong <@${interaction.targetId}> !` });
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

module.exports = class PingUserCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "Ping a user",
      category: "Misc",
      args: [
        {
          name: "userToPing",
          type: "USER",
          default: null,
        },
      ],
    });
  }

  execute(message, args) {
    message.channel.send({
      content: `Pong ! ${args.userToPing ? args.userToPing : ""}`,
    });
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Command } from "sheweny";
import type { ShewenyClient, MessageCommandOptionData  } from "sheweny";
import type { Message } from "discord.js";

export class PingUserCommand extends Command {
  constructor(client: ShewenyClient) {
    super(client, {
      name: "ping",
      description: "Ping a user",
      category: "Misc",
            args: [
        {
          name: "userToPing",
          type: "USER",
          default: null,
        },
      ],
    });
  }

  execute(message: Message, args:any) {
      content: `Pong ! ${args.userToPing ? args.userToPing : ""}`,
  }
}
```

:::
::::
