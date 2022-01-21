$(document).ready(function () {
  $("button").click(function () {
    let yourName = $("input").first().val();

    $("h1").first().text(`Good afternoon ${yourName} !`);

    $(this).hide();

    $("input").hide();
  });
});
