const str = `
### collections

The collections of commands, events, buttons, select-menus, inhibitors.

Return : [ShewenyClientCollections](../typedef/ShewenyClientCollections.md)

### joinThreadsOnCreate

If the bot should join threads on create.

Return : [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### mode

The mode for run application (development or production).

Return : [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### admins

The admins of the bot (no affected by cooldown and have adminOnly permission).

Return : [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>

### connected

Indicate when the client is connected to the Discord API.

Return : [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### managers

The managers of the client.

Return : [ShewenyClientManagers](../typedef/ShewenyClientManagers.md).

### util

Useful functions for your bot.

Return : [ClientUtil](../client/ClientUtil.md).


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
