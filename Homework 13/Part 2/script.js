let myArray = [1, 2, 3, 4, 5];
let getDiv = document.getElementById("numbers");
let sum = 0;
function printNumbers(myArray) {
  let equiation = "";
  getDiv.innerHTML = "<ul>";
  for (let i = 0; i <= myArray.length - 1; i++) {
    getDiv.innerHTML += `<li> ${myArray[i]} </li>`;
    sum += myArray[i];
  }
  getDiv.innerHTML += "</ul>";

  getDiv.innerHTML += myArray.join(" + ") + " = " + sum;
}

printNumbers(myArray);
