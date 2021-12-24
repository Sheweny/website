const list = `
- [onFailure](#onfailure)
- [execute](#abstract-execute)
- [register](#async-register)
- [reload](#async-reload)
- [unregister](#unregister)

`;

// Sort the list alphabetically
const sorted = list.split("\n").sort().join("\n");
console.log(sorted);
