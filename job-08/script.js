function sommeNombresPremiers(num1, num2) {
  let min = 2;
  let action = true;

  for (let number = min; min < num1; number++) {
    if (number >= 2) {
      //test du quotien de la division
      for (quotien = 2; quotien < number; quotien++) {
        if (number % quotien == 0) {
          action = false;
        }
      }
    }
  }
}
sommeNombresPremiers(10, 20);
