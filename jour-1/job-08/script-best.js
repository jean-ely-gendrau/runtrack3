function sommeNombresPremiers(num1, num2) {
  if (num1 <= 1 || num2 <= 1) return false; //RETURN
  if (num1 === 2 || num2 === 2)
    //RETURN
    return `Somme des nombres premier ${num1} et ${num2} : ${num1 + num2}`;

  /* On utilise ici la raçine carré pour économiser la mémoire sur les grand nombre
     
     Math.sqrt(num1)

     est on boucle temps numberDiviser est inférieur ou égal à la racine carré de num*  (<=) 
     "let numberDiviser = 2; numberDiviser <= numSqrtNum1; numberDiviser++"
   */
  let numSqrtNum1 = Math.sqrt(num1);
  for (let numberDiviser = 2; numberDiviser <= numSqrtNum1; numberDiviser++) {
    if (num1 % numberDiviser === 0) return false; //RETURN
  }

  let numSqrtNum2 = Math.sqrt(num2);
  for (let numberDiviser = 2; numberDiviser <= numSqrtNum2; numberDiviser++) {
    if (num2 % numberDiviser === 0) return false; //RETURN
  }

  return `Somme des nombres premier ${num1} et ${num2} : ${num1 + num2}`; //RETURN
}

result = sommeNombresPremiers(1, 1);
// Fonction Ternaire
!result
  ? console.error(
      "Ooppps un des nombres n'est pas premier, ou une erreur insoupçonnée est survenu"
    )
  : console.log(result);
