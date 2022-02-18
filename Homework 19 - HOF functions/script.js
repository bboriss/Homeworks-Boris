const randomNumbers = [5, -2, 77, -14, 25, -898, 535, -19];

// filter method
const positiveNumbers = randomNumbers.filter((positive) => positive > 0);
console.log(positiveNumbers);

// function that works like filter method

const funcLikeFilter = (someArr, filtering) => filtering(someArr);

const functionFilter = (arr) => {
  const positiveNum = [];
  for (const num of arr) {
    if (num > 0) {
      positiveNum.push(num);
    }
  }
  return positiveNum;
};
console.log(funcLikeFilter(randomNumbers, functionFilter));

// map method
const multipled = randomNumbers.map((numb) => numb * 2);
console.log(multipled);

// function that works like map method
const funcLikeMap = (someArr2, maping) => maping(someArr2);

const functionMap = (arr2) => {
  const multipliedNum = [];
  for (const number of arr2) {
    multipliedNum.push(number * 2);
  }
  return multipliedNum;
};
console.log(funcLikeMap(randomNumbers, functionMap));

// forEach method
randomNumbers.forEach((element, index) => {
  if (element > 0) {
    console.log(`Number ${element} with index ${index} is positive number. `);
  } else {
    console.log(
      `Number ${Math.abs(element)} with index ${index} is negative number. `
    );
  }
});
console.log("----ForEach Like Function----");
// function that works like forEach method
const funcLikeForEach = (someArr3, forEachMethod) => forEachMethod(someArr3);

const forEachMethod = (arr4) => {
  let counter = -1;
  for (const element2 of arr4) {
    counter += 1;
    if (element2 > 0) {
      console.log(
        `Number ${element2} with index ${counter}  is positive number. `
      );
    } else {
      console.log(
        `Number ${Math.abs(
          element2
        )} with index ${counter}  is negative number. `
      );
    }
  }
};
funcLikeForEach(randomNumbers, forEachMethod);
