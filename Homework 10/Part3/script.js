let userInput = parseInt(prompt("Please enter money"));

function automaticTellerMachine(requiredCash) {
  let accountMoney = 10000;
  if (userInput > accountMoney) {
    console.log("No enough money");
  } else {
    console.log("You have just taken", userInput, "$");
    console.log("You have", accountMoney - userInput, "$ left");
  }
}
automaticTellerMachine(userInput);
