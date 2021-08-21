# Inhibitors priority

You can defined a priority to run some checks first.

:::: code-group
::: code-group-item JS CommonJS

```js
const { Inhibitor } = require("@sheweny/framework");
module.exports = class InDatabaseInhibitor extends Inhibitor {
  constructor(client) {
    super(client, "blacklist", {
      type: "APPLICATION_COMMAND",
      priority: 1, // Executed before other inhibitors with lower priority
    });
  }
  execute(client, interaction) {
    return await dbPremium.findOne({ guildID: interaction.guildId });
  }
  onFailure(client, interaction) {
    interaction.reply("Your guild not have premium version of bot.");
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Inhibitor } from "@sheweny/framework";
import type { ShewenyClient } from "@sheweny/framework";
import type { CommandInteraction } from "discord.js";

export class InDatabaseInhibitor extends Inhibitor {
  constructor(client: ShewenyClient) {
    super(client, "blacklist", {
      type: "APPLICATION_COMMAND",
      priority: 1, // Executed before other inhibitors with lower priority
    });
  }
  execute(client: ShewenyClient, interaction: CommandInteraction) {
    return await dbPremium.findOne({ guildID: interaction.guildId });
  }
  onFailure(client: ShewenyClient, interaction: CommandInteraction) {
    interaction.reply("Your guild not have premium version of bot.");
  }
}
```

:::
::::
