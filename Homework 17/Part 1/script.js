let btn = document.getElementById("btn");
btn.addEventListener("click", addTooList);

function addTooList(event) {
  event.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  if (firstName == "" || lastName == "" || phoneNumber == "") {
    alert("Error input, try again");
  } else {
    let list = document.getElementById("table");
    let row = document.createElement("tr");

    row.innerHTML = `
  <td> ${firstName} </td>
  <td> ${lastName} </td>
  <td> ${phoneNumber} </td>
  <td> <button> Edit </button> </td>
  <td> <button> X </button> </td>`;

    list.appendChild(row);
    document.forms[0].reset();
  }
}
