function bisextile(annee) {
  result =
    (annee % 4 === 0 && annee % 100 > 0) || annee % 400 === 0
      ? `${annee} est une année bissextil`
      : `${annee} n'est une année bissextil`;
  console.log(result);
}

bisextile("2001");
