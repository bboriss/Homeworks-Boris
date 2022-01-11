let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];

function full(firstNames, lastNames) {
  let fullNames = [];
  for (let i = 0; i <= firstNames.length - 1; i++) {
    fullNames.push(i + 1 + "." + firstNames[i] + " " + lastNames[i]);
  }
  return fullNames;
}
console.log(full(firstNames, lastNames));
