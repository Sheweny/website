# Command permissions

With sheweny you can defined permissions of bot and user.

::: tip
You can use `BOT_ADMIN` permissions for check if user is admin of bot.
:::

If user missing permissions the client emit `userMissingPermissions` :

Parameters :

- interaction or message (if bot use slash-commands or not) (type : [Interaction](https://discord.js.org/#/docs/main/stable/class/Interaction) or [Message](https://discord.js.org/#/docs/main/stable/class/Message))
- missing (type : [Array\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>)

If bot missing permissions the client emit `botMissingPermissions` :

Parameters :

- interaction or message (if bot use slash-commands or not) (type : [Interaction](https://discord.js.org/#/docs/main/stable/class/Interaction) or [Message](https://discord.js.org/#/docs/main/stable/class/Message))
- missing (type : [Array\<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>)

## Slash-command

:::: code-group
::: code-group-item JS CommonJS

```js
const { Command } = require("@sheweny/framework");

export class PingCommand extends Command {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
      userPermissions: ["BAN_MEMBERS", "BOT_ADMIN"],
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
      userPermissions: ["BAN_MEMBERS", "BOT_ADMIN"],
    });
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
const { Command } = require("@sheweny/framework");

export class PingCommand extends Command {
  constructor(client) {
    super(client, "ping", {
      description: "Ping the bot",
      category: "Misc",
      userPermissions: ["BAN_MEMBERS", "BOT_ADMIN"],
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
