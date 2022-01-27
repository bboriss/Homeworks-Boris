let items = [];
let btn = document.getElementById("addButton");
btn.addEventListener("click", addItems);

function addItems() {
  let userInput = document.getElementById("txtArea");

  if (userInput.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    let userInput = document.getElementById("txtArea");
    items.push(userInput.value);

    console.log("items = [" + items + "]");

    let ul = document.getElementById("ulID");
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";

    li.appendChild(document.createTextNode(userInput.value));
    li.appendChild(checkbox);
    ul.appendChild(li);

    userInput.value = "";
  }
}
