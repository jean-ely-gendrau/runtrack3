function fizzbuzz() {
  for (let index = 0; index < 50; index) {
    let result = index;

    if (index % 3 === 1 && index % 5 === 1) {
      result = "FizzBuzz";
    } else if (index % 5 === 1) {
      result = "Buzz";
    } else if (index % 3 === 1) {
      result = "Fizz";
    }
  }
  console.log(result);
}
fizzbuzz();
