const apiCall = (async function () {
  const response = await fetch(
    `https://json-server-boris.herokuapp.com/api/students`
  );
  const data = await response.json();
  console.log(data);
  const showData = function (data) {
    // Students Less than 18 yars old

    const overEighteen = data.filter((student) => student.age > 18);
    console.log(overEighteen);

    // Only First and Last Name

    const onlyName = data.map(
      (studentName) => `${studentName.firstName} ${studentName.lastName}`
    );
    console.log(onlyName);

    //   Cities toUpperCase

    data.forEach((element) => (element.city = element.city.toUpperCase()));
    console.log(data);

    //   Only male and older then 21

    const maleOverTwentyOne = data.filter(
      (student1) => student1.age > 21 && student1.gender === "Male"
    );
    console.log(maleOverTwentyOne);

    // averageGrade

    const sum = (accumulator, obj) => accumulator + obj.averageGrade;
    const avgGrade = data.reduce(sum, 0) / data.length;
    console.log(avgGrade);

    // adding +2 to averageGrade

    data.forEach(
      (element) => (element.averageGrade = element.averageGrade + 2)
    );
    console.log(data);

    // sorting alphabetically

    let sortArray = (x, y) => (x.lastName > y.lastName ? 1 : -1);

    let lastNameSort = data.sort(sortArray);
    console.log(lastNameSort);

    // sorting numerically

    let sortArray1 = (x, y) => (x.age > y.age ? 1 : -1);

    let ageSort = data.sort(sortArray1);
    console.log(ageSort);

    // two arrays
  };
  return showData(data);
})();
