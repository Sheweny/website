const p = `:::details Properties
- [customId](#customid)
- [register](#async-register)
:::

## Properties

### client

The framework client.

### manager

The manager of this structure.
`;
function sortListsInPage(str) {
  const blocks = str.split(":::details");
  blocks.forEach((item, index) => {
    if (!item) blocks.splice(index, 1);
  });
  console.log(blocks);
  const blocksOnly = blocks.map((content) => {
    return content.split(":::")[0];
  });

  return blocksOnly.map((c) => c.split("\n").sort().join("\n")).toString();
}
function sortContentInPage(str) {
  const one = str.split("## Properties")[1];
  const two = str.split("## Methods")[1];
  const three = str.split("## Events")[1];

  let result = "";
  if (one && one.length) {
    result += `## Properties\n`;
    result += sortContent(one);
  }
  if (two && two.length) {
    result += `## Methods\n`;
    result += sortContent(two);
  }
  if (three && three.length) {
    result += `## Events\n`;
    result += sortContent(three);
  }
  return result;
}
function sortContent(str, separator = "###") {
  if (!str) return "";
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
    const aTitle = a.title.replace("[async]", "").trim();
    const bTitle = b.title.replace("[async]", "").trim();
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

const completePage = sortListsInPage(p);

// wirite the variable completePage in file
const fs = require("fs");
const { loadUserConfig } = require("vuepress");
fs.writeFile("./completePage.md", completePage, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
