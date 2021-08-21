# Basic button listener

With sheweny each button must be a class which extends from the [Button](../../doc/structures/Button.md) class

## Import Button

Import the [Button](../../doc/structures/Button.md) class :

:::: code-group
::: code-group-item CommonJS

```js
const { Button } = require("@sheweny/framework");
```

:::
::: code-group-item ESM

```js
import { Button } from "@sheweny/framework";
```

:::
::::

## Create the button listner

:::: code-group
::: code-group-item JS CommonJS

```js
const { Button } = require("@sheweny/framework");

module.exports = class Btns1And2 extends Button {
  constructor(client) {
    super(client, ["btnId1", "btnId2"]);
  }
  execute(button) {
    console.log(button);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Button, ShewenyClient } from "@sheweny/framework";
import type { ButtonInteraction } from "discord.js";

export class Btns1And2 extends Button {
  constructor(client: ShewenyClient) {
    super(client, ["btnId1", "btnId2"]);
  }
  execute(button: ButtonInteraction) {
    console.log(button);
  }
}
```

:::
::::
