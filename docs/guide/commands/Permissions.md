# Command permissions

With sheweny you can defined permissions of bot and user.

If user missing permissions for the command, the `userMissingPermissions` will be emitted by [CommandManager](../../doc/managers/CommandsManager.md#usermissingpermissions) :

If bot missing permissions the command, the `clientMissingPermissions` will be emitted by [CommandManager](../../doc/managers/CommandsManager.md#clientmissingpermissions) :

## Slash-command

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("sheweny");

module.exports = class PingCommand extends Command {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      type: "SLASH_COMMAND",
      category: "Misc",
      userPermissions: ["BAN_MEMBERS", "MANAGE_MESSAGES"],
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
    super(client, "ping", {
      description: "Ping the bot",
      type: "SLASH_COMMAND",
      category: "Misc",
      userPermissions: ["BAN_MEMBERS", "MANAGE_MESSAGES"],
    });
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
    super(client, "ping", {
      description: "Ping the bot",
      type: "MESSAGE_COMMAND",
      category: "Misc",
      userPermissions: ["BAN_MEMBERS", "MANAGE_MESSAGES"],
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
    super(client, "ping", {
      description: "Ping the bot",
      type: "MESSAGE_COMMAND",
      category: "Misc",
      userPermissions: ["BAN_MEMBERS", "MANAGE_MESSAGES"],
    });
  }

  execute(message: Message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::::
