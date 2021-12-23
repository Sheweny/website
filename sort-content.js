const str = `
### before()

Executed before select menu(s) checks.

Parameters :

| Name        | Type                                                                                           | Description     |
| ----------- | ---------------------------------------------------------------------------------------------- | --------------- |
| interaction | [SelectMenuInteraction](https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### [abstract] execute()

The execution of select menu(s).

Parameters :

| Name        | Type                                                                                           | Description     |
| ----------- | ---------------------------------------------------------------------------------------------- | --------------- |
| interaction | [SelectMenuInteraction](https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction) | The interaction |

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<any> | any

### unregister()

Unregister a select-menus group from the bot.

Return : [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### [async] reload()

Reload a select-menus group.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[SelectMenu](./SelectMenu.md)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Null)

### [async] register()

Register the select-menu.

Return : [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[SelectMenu](./SelectMenu.md)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Null)

`;

function sortContent(str, separator = "###") {
  const data = [];
  // An items is composed of a title and a content
  str.split(separator).map((item) => {
    const title = item.split("\n")[0].trim();
    const content = item.split("\n").slice(1).join("\n").trim();
    if (title && content)
      data.push({
        title,
        content,
      });
  });

  // Sort an array of items by title
  const sortedContent = data.sort((a, b) => {
    // Exept the [async] string in the title
    const aTitle = a.title
      .replace("[async]", "")
      .replace("[abstract]", "")
      .trim();
    const bTitle = b.title
      .replace("[async]", "")
      .replace("[abstract]", "")
      .trim();
    // Compare the title
    return aTitle.localeCompare(bTitle);
  });

  // Convert the array of items to a string
  const finalContent = sortedContent
    .map((item) => {
      return `\n${separator} ${item.title}\n${item.content}`;
    })
    .join("\n");
  return finalContent;
}
console.log(sortContent(str));
