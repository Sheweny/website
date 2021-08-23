# Before select-menu listener

It is possible to add a `before` function to execute code before checks like inhibitors etc.

## Create the select-menu listner

:::: code-group
::: code-group-item JS CommonJS

```js
const { SelectMenu } = require("sheweny");

module.exports = class SelectMenus1And2 extends SelectMenu {
  constructor(client) {
    super(client, ["selectMenuId1", "selectMenuId2"]);
  }
  before(selectMenu) {
    console.log("Before function");
  }
  execute(selectMenu) {
    console.log(selectMenu);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { SelectMenu, ShewenyClient } from "sheweny";
import type { SelectMenuInteraction } from "discord.js";

export class SelectMenus1And2 extends SelectMenu {
  constructor(client: ShewenyClient) {
    super(client, ["selectMenuId1", "selectMenuId2"]);
  }
  before(selectMenu: SelectMenuInteraction) {
    console.log("Before function");
  }
  execute(selectMenu: SelectMenuInteraction) {
    console.log(selectMenu);
  }
}
```

:::
::::
