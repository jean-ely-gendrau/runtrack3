Array.prototype.mySort = function (array, options) {
  // On parcourt  le tableau, et pour chaque valeur on fera une boucle, pour le trier entièrement
  array.forEach((items, indexs) => {
    // Pour chaque item du tableau on vérifie tous les éléments du tableau
    array.forEach((item, index) => {
      // Ordre Croissant : Si l'élement en cours d'évaluation de la bloucle est supérieur au prochain du tableau
      if (options === "asc" && array[index + 1] && item > array[index + 1]) {
        // On l'extrait du tableau
        array.splice(index, 1);

        // On change sa position dans le de n + 1
        array.splice(index + 1, 0, item);
      }

      //Ordre décroisant : Si l'Élément en cours d'évaluation de la boucle est inférieur au prochain du tableau
      if (options === "desc" && array[index + 1] && item < array[index + 1]) {
        // On l'extrait du tableau
        array.splice(index, 1);

        // On change sa position dans le de n + 1
        array.splice(index + 1, 0, item);
      }
    });
  });
  return console.log(this);
};

number = [10, 8, 6, 5, 72, 25]; // Tableau de nombre

/* mySort
  Fonction Array.prototype. NomDeLaFunction 
  Imitation de la function Array.prototype.sort()
  Cette fonction reçoit en paramètre un tableau et une valeur string (options) asc | des
  asc  : pour trier les nombres croissant
  desc : pour trier les nombres décroissants
*/
number.mySort(number, "desc");
