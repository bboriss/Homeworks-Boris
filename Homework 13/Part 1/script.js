var p_elements = document.getElementsByTagName("p");

for (var i = 0; i < p_elements.length; i++) {
  p_elements[i].innerHTML = "some new text";
}

var h_elements = document.getElementsByTagName("h1");

for (var i = 0; i < h_elements.length; i++) {
  h_elements[i].innerHTML = "some new h1_text";
}

var h_elements = document.getElementsByTagName("h3");

for (var i = 0; i < h_elements.length; i++) {
  h_elements[i].innerHTML = "some new h3_text";
}
