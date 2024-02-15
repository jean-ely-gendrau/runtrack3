Array.prototype.mySort = function (array, options) {
  array.forEach((items, indexs) => {
    array.forEach((item, index) => {
      if (options === "asc" && array[index + 1] && item > array[index + 1]) {
        array.splice(index, 1);

        array.splice(index + 1, 0, item);
      }

      if (options === "desc" && array[index + 1] && item < array[index + 1]) {
        array.splice(index, 1);

        array.splice(index + 1, 0, item);
      }
      /*
    if (array[index + 1] && item < array[index + 1]) {
      array.splice(index, 1);

      array.splice(index - 1, 0, item);
    }
    */
    });
  });
  return console.log(this);
};

Array.prototype.mySort1 = function (value, hhh) {
  return console.log(value, hhh, this);
};
function tri(numbers, order) {
  return console.log(numbers);

  /*
  console.log(numbers);

  const numberAsc = (a, b) => a - b;
  const mapReturn = numbers.map((number, index, array) => {
    console.log(array);
    if (numbers[index + 1] < number) {
      return numbers[index + 1];
    } else {
      return number;
    }
  });
*/
  /*
  const mapReturn = numbers.map((number, index) => {
    numbers.filter((numberFilter, index) => number - numberFilter);
  });

  
  */
  // return mapReturn;
}

number = [10, 8, 6, 5, 72, 25];
number.mySort(number, "desc");
