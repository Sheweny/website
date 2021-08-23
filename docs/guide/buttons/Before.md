# Before button listener

It is possible to add a `before` function to execute code before checks like inhibitors etc.

## Create the button listner

:::: code-group
::: code-group-item JS CommonJS

```js
const { Button } = require("sheweny");

module.exports = class Btns extends Button {
  constructor(client) {
    super(client, ["btnId1", "btnId2"]);
  }
  before(button) {
    console.log("Before function");
  }
  execute(button) {
    console.log(button);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Button, ShewenyClient } from "sheweny";
import type { ButtonInteraction } from "discord.js";

export class Btns extends Button {
  constructor(client: ShewenyClient) {
    super(client, ["btnId1", "btnId2"]);
  }
  before(button: ButtonInteraction) {
    console.log("Before function");
  }
  execute(button: ButtonInteraction) {
    console.log(button);
  }
}
```

:::
::::
