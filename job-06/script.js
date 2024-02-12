function fizzbuzz() {
  let min = 1;
  let max = 151;

  for (let index = min; index < max; index++) {
    let result = index;
    if (index % 3 === 1) {
      result = "Fizz";
    } else if (index % 5 === 1) {
      result = "Buzz";
    }

    console.log(result);
  }
}
fizzbuzz();
