let sum = 0;
let arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "afepfa"];

function validateNumber(arr1) {
  var sum1 = 0;
  for (var j = 0; j < arr1.length; j++) {
    if (arr1.every(Number.isInteger)) {
      sum1 += arr1[j];
    } else {
      return "Error";
    }
  }
  return sum1;
}
console.log(validateNumber(arr1));
