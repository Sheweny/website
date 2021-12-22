const tab = `| commands    | Collection\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Command](../structures/Command.md)>       | A collection of commands     |
| events      | Collection\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Event](../structures/Event.md)>           | A collection of events       |
| buttons     | Collection\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Button](../structures/Button.md)>         | A collection of buttons      |
| selectMenus | Collection\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [SelectMenu](../structures/SelectMenu.md)> | A collection of select-menus |
| inhibitots  | Collection\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [Inhibitor](../structures/Inhibitor.md)>   | A collection of inhibitors   |`;
// const arr = tap.split("\n");

// arr.forEach((line) => {
//   const key = line.split("|")[1].trim();
// });

// Sorth the tab by the first column
const sortTab = (tab) => {
  const arr = tab.split("\n");
  const sorted = arr.sort((a, b) => {
    const aKey = a.split("|")[1].trim();
    const bKey = b.split("|")[1].trim();
    return aKey.localeCompare(bKey);
  });
  return sorted.join("\n");
};
console.log(sortTab(tab));
