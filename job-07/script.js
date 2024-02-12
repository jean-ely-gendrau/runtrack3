function jourtravaille(date) {
  let result = "";

  if (date.getDay() === 0 || date.getDay() === 6) {
    result = "Non";
  }

  console.log(result);
}
jourtravaille(new Date("2020, 6, 17"));
