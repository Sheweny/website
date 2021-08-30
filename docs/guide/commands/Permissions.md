# Command permissions

With sheweny you can defined permissions of bot and user.

::: tip
You can use `BOT_ADMIN` permissions for check if user is admin of bot.
:::

If user missing permissions the command `userMissingPermissions` :

Parameters :

- interaction or message (if bot use slash-commands or not) (type : [Interaction](https://discord.js.org/#/docs/main/stable/class/Interaction) or [Message](https://discord.js.org/#/docs/main/stable/class/Message))
- missing (type : Array\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>)

If bot missing permissions the command `botMissingPermissions` :

Parameters :

- interaction or message (if bot use slash-commands or not) (type : [Interaction](https://discord.js.org/#/docs/main/stable/class/Interaction) or [Message](https://discord.js.org/#/docs/main/stable/class/Message))
- missing (type : Array\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>)

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
      userPermissions: ["BAN_MEMBERS", "BOT_ADMIN"],
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
      userPermissions: ["BAN_MEMBERS", "BOT_ADMIN"],
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
      userPermissions: ["BAN_MEMBERS", "BOT_ADMIN"],
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
      userPermissions: ["BAN_MEMBERS", "BOT_ADMIN"],
    });
  }

  execute(message: Message) {
    message.channel.send({ content: "Pong !" });
  }
}
```

:::
::::
