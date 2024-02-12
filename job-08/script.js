function sommeNombresPremiers(num1, num2) {
  let min = 2;
  let action1 = true;
  let action2 = true;

  for (let number = min; min < num1; number++) {
    if (number >= 2) {
      //test du quotien de la division
      for (quotien = 2; quotien < number; quotien++) {
        if (number % quotien == 0) {
          action1 = false;
        }
      }
    }
  }

  for (let number = min; min < num1; number++) {
    if (number >= 2) {
      //test du quotien de la division
      for (quotien = 2; quotien < number; quotien++) {
        if (number % quotien == 0) {
          action2 = false;
        }
      }
    }
  }

  if (action1 && action2) {
    console.log(num1 + num2);
  } else if (!action1 && !action2) {
    console.log(`${action1} et ${action2} ne sont pas des nombres 1er`);
  } else if (!action1) {
    console.log(`${action1} n'est pas un nombre 1er`);
  } else if (!action2) {
    console.log(`${action2} n'est pas un nombre 1er`);
  }
}

sommeNombresPremiers(10, 20);
