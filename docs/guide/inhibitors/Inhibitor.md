# Inhibitors

Inhibitors allow you to limit the use of a command, an event, or an interaction.

## Getting started

Inhibitors are a way to monitor or block messages or interactions.
Because inhibitors are another kind of module, we need another kind of handler.
To set it up, simply import and instantiate the InhibitorHandler, just like with the command handler.
Please see [inhibitors handler](../handlers/inhibitors) for setup the handler

## Inhibitor class

In your `inhibitors` directory create file with your inhibitor :

:::: code-group
::: code-group-item JS CommonJS

```js
const { Inhibitor } = require('@sheweny/framework')
module.exports =  class BlackListInhibitor extends Inhibitor {
  constructor(client) {
    super(client, "blacklist", {
      type: "APPLICATION_COMMAND",
    });
  }
  execute(client, interaction) {
    return !["877090306103840778"].includes(interaction.guildId!);
  }
  onFailure(client, interaction) {
    interaction.reply("Your guild is blacklisted.");
  }
}
```

:::
::: code-group-item TS ES Modules

```ts
import { Inhibitor } from "@sheweny/framework";
import type { ShewenyClient } from "@sheweny/framework";
import type { CommandInteraction } from "discord.js";

export class BlackListInhibitor extends Inhibitor {
  constructor(client: ShewenyClient) {
    super(client, "blacklist", {
      type: "APPLICATION_COMMAND",
    });
  }
  execute(client: ShewenyClient, interaction: CommandInteraction) {
    return !["877090306103840778"].includes(interaction.guildId!);
  }
  onFailure(client: ShewenyClient, interaction: CommandInteraction) {
    interaction.reply("Your guild is blacklisted.");
  }
}
```

:::
::::
