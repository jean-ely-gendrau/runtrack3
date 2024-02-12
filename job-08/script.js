function sommeNombresPremiers(num1, num2) {
  if (num1 <= 1 || num2 <= 1) return false; //RETURN
  if (num1 === 2 || num2 === 2)
    //RETURN
    return `Somme des nombres premier ${num1} et ${num2} : ${num1 + num2}`;

  /* 
    Note de mathématique merci a : (https://www.pourlascience.fr/sd/mathematiques/nombres-premiers-des-jumeaux-des-cousins-et-des-nombres-sexy-16720.php#:~:text=Gr%C3%A2ce%20au%20crible%20ou%20tout,%2C%20193%2C%20197%20et%20199.)
    Un nombre premier est forcément supérieur à 1.
    Un nombre premier est un nombre supérieur,  ne pouvant pas être divisé par un nombre entier autre que lui-même ou 1.

    Effectuons une boucle qui parcourt tous les nombres supérieurs à 1 et inférieurs à lui-même. (note ci-dessus)
    En utilisant l'opérateur modulo, nous pouvons obtenir le reste de la division sur chacun de ces nombres,
    si l'un d'entre eux est égal à zéro. Il est alors possible de diviser le nombre autrement que par lui-même ou 1..
    Alors ce n'est pas un nombre premier.
 */
  for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) return false; //RETURN
  }

  for (let i = 2; i < num2; i++) {
    if (num2 % i === 0) return false; //RETURN
  }

  // Si tout c'est bien passé alors on retourne le résultat
  return `Somme des nombres premier ${num1} et ${num2} : ${num1 + num2}`; //RETURN
}
// Fonction sommeNombresPremiers(int, int);
result = sommeNombresPremiers(5, 5);
// Fonction Ternaire
!result
  ? //Si la fonction retourne fasle on affiche une erreur : console.error(message)
    console.error(
      "Ooppps un des nombres n'est pas premier, ou une erreur insoupçonnée est survenu"
    )
  : // Sinon on affiche le résultat : console.log(result)
    console.log(result);
