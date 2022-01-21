$(document).ready(function () {
  $("button").click(function () {
    let textInput = $("#fortext").val();
    let colorInput = $("#forcolor").val();

    if (textInput == "") {
      $("h3").first().text("Plese try again");
    } else {
      $("h1").first().text(textInput).css("color", colorInput);
    }
  });
});
