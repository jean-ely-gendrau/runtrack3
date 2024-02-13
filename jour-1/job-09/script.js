function tri(numbers, order) {
  console.log(numbers);

  const numberAsc = (a, b) => a - b;
  const mapReturn = numbers.map((number, index) => {
    numbers.forEach((element) => {
      if (element < number) {
        return element;
      }
    });
  });
}

number = [10, 8, 6, 5, 72, 25];
console.log(number.sort(tri(number, "asc")));
