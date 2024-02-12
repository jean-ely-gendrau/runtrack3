function tri(numbers, order) {
  // console.log(numbers, order);
  numebersAsTri = numbers.map((number, index) => {
    // console.log(number, index);
    var tempNimbers =
      index + 1 <= numbers.length - 1
        ? numbers.slice(index + 1)
        : numbers.slice(0, 1);
    // console.log("tempNimbers", tempNimbers);
    tempNimbers.forEach((numberNP1) => {
      if (numberNP1 > number) {
        return number;
      }
    });
  });
}

number = [10, 8, 6, 5, 72, 25];
console.log(number.sort(tri(number, "asc")));
