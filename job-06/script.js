function fizzbuzz() {
  let min = 1;
  let max = 151;

  for (let index = min; index < max; index++) {
    let result = index;
    if (index % 3 === 1) {
      result = "Fizz";
    }
    console.log(result);
  }
}
fizzbuzz();
