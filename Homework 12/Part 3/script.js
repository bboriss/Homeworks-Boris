function minMaxSum(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  }
  return "Min:" + min + ", Max:" + max + ", Sum:" + parseInt(min + max);
}
console.log(minMaxSum([1, 2, 3, 4, 5, "asdasdasda"]));
