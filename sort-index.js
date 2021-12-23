const list = `
- [before](#before)
- [execute](#abstract-execute)
- [unregister](#unregister)
- [reload](#async-reload)
- [register](#async-register)
`;

// Sort the list alphabetically
const sorted = list.split("\n").sort().join("\n");
console.log(sorted);
