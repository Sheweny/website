# Auto-complete commands

The auto-complete commands are used to provide auto-complete suggestions for the arguments in application commands.

:::warning
For use auto-complete you must have discord.js V13.3.0 or higher and sheweny V3.0.0 or higher.
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
      options: [
        {
          name: "name",
          description: "description",
          type: "STRING",
          autocomplete: true,
        },
        {
          name: "theme",
          description: "description",
          type: "STRING",
          autocomplete: true,
        },
      ],
    });
  }
  execute(interaction) {
    interaction.reply({ content: "Pong !" });
  }

  onAutocomplete(interaction) {
    const focusedOption = interaction.options.getFocused(true);

    let choices;

    if (focusedOption.name === "name") {
      choices = ["faq", "install", "collection", "promise", "debug"];
    }

    if (focusedOption.name === "theme") {
      choices = ["halloween", "christmas", "summer"];
    }

    const filtered = choices.filter((choice: any) =>
      choice.startsWith(focusedOption.value)
    );
    interaction
      .respond(filtered.map((choice) => ({ name: choice, value: choice })))
      .then(console.log)
      .catch(console.error);
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
      options: [
        {
          name: "name",
          description: "description",
          type: "STRING",
          autocomplete: true,
        },
        {
          name: "theme",
          description: "description",
          type: "STRING",
          autocomplete: true,
        },
      ],
    });
  }
  execute(interaction: CommandInteraction) {
    interaction.reply({ content: "Pong !" });
  }
  onAutocomplete(interaction: AutocompleteInteraction) {
    const focusedOption = interaction.options.getFocused(true);

    let choices: any;

    if (focusedOption.name === "name") {
      choices = ["faq", "install", "collection", "promise", "debug"];
    }

    if (focusedOption.name === "theme") {
      choices = ["halloween", "christmas", "summer"];
    }

    const filtered = choices!.filter((choice: any) =>
      choice.startsWith(focusedOption.value)
    );
    interaction
      .respond(filtered.map((choice: any) => ({ name: choice, value: choice })))
      .then(console.log)
      .catch(console.error);
  }
}
```

:::
::::
