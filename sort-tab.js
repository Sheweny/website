const tab = `| default                         | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                             | The main directory of the commands                                                      |
| directory                       | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                             | The main directory of the commands                                                      |
| loadAll                         | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                           | If the framework will load all                                                          |
| guildId                         | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) or [Array](hthttps://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | The guild to register commands                                                          |
| prefix                          | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                                                                             | The prefix for the bot                                                                  |
| applicationPermissions          | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                           | If the permissions for app commands must be required (only available if guildId is set) |
| autoRegisterApplicationCommands | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                                                                           | If the application commands must be registered                                          |`;
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
