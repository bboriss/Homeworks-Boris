let studentArray = [];

function addStudent(event) {
  event.preventDefault();

  let student = {
    firstName: document.getElementById("firstname").value,
    secondname: document.getElementById("secondname").value,
    age: parseInt(document.getElementById("ages").value),
  };
  studentArray.push(student);
  document.querySelector("form").reset();

  console.log(studentArray);
}
document.getElementById("submit").addEventListener("click", addStudent);
