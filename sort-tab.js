const tab = `

| admins              | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | Ids of bot admins                    | None        | ✓        |
| mode                | development or production                                                                                                                                                               | The mode for run application         | development | ✓        |
| joinThreadsOnCreate | [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                           | If bot should join threads on create | false       | ✓        |
| managers            | [ClientManagersOptions](#clientmanagersoptions)                                                                                                                                         | The options for the managers         |             | ✓        |



`;
// const arr = tap.split("\n");

// arr.forEach((line) => {
//   const key = line.split("|")[1].trim();
// });

// Sorth the tab by the first column
const sortTab = (tab) => {
  const arr = tab.split("\n");
  const sorted = arr
    .filter((i) => i && i !== "\n")
    .sort((a, b) => {
      const aKey = a.split("|")[1].trim();
      const bKey = b.split("|")[1].trim();
      return aKey.localeCompare(bKey);
    });
  return sorted.join("\n");
};
console.log(sortTab(tab));
