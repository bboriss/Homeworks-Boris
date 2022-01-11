//Declaration of both functions
function yourDogAge(humanAge) {
  let result = humanAge * 7;
  return result;
}
function yourAge(dogAge) {
  let result = dogAge / 7;
  return result;
}

//The person chooses what to calculate
let personChoice = prompt(
  "Enter D for calculating dogs ages or H for calculating your ages"
);
let personInput = parseInt(prompt("Please enter ages:"));
if (personChoice === "D") {
  console.log(`Your dog is ${yourDogAge(personInput)} years old.`);
} else if (personChoice === "H") {
  console.log(`You are ${yourAge(personInput)} years old.`);
} else {
  console.log("ERROR!");
}
