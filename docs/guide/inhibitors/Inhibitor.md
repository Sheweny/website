# Basic inhibitors

Inhibitors allow you to limit the use of a command, an event, or an interaction.

## Getting started

Inhibitors are a way to monitor or block messages or interactions.
Because inhibitors are another kind of module, we need another kind of manager.
To set it up, simply import and instantiate the InhibitorManager, just like with the command manager.
Please see [inhibitors manager](../managers/inhibitors) for setup the manager

## Inhibitor class

In your `inhibitors` directory create file with your inhibitor :

:::: code-group
::: code-group-item JS CommonJS

```js
const { Inhibitor } = require("sheweny");

module.exports =  class BlackListInhibitor extends Inhibitor {
  constructor(client) {
    super(client, "blacklist", {
      type: ["APPLICATION_COMMAND"],
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
import { Inhibitor } from "sheweny";
import type { ShewenyClient } from "sheweny";
import type { CommandInteraction } from "discord.js";

export class BlackListInhibitor extends Inhibitor {
  constructor(client: ShewenyClient) {
    super(client, "blacklist", {
      type: ["APPLICATION_COMMAND"],
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
