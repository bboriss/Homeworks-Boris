function generate_table() {
  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var columnNumber = document.getElementById("columns").value;
  var rowNumber = document.getElementById("rows").value;

  for (var i = 0; i < rowNumber; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < columnNumber; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(
        "cell in row " + i + ", column " + j
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "1");
}
