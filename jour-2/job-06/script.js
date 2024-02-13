/* initialisation du tableau qui contiendra
   les dernières touches appuyées.

   Lors des précedant test le tableau était écrasser à chaque chargement.
   Changont la porter du tableau en dehos de la fonction et remplaçon let par var
*/
var arrayBufferNonami = [];

const konamiHandler = (e) => {
  e.preventDefault();

  // Le code secret des touches appuyées. Ne faite par attention au majuscule et minuscule, nous verrons cela après.
  let konamiSecret = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "A",
    "B",
  ];

  let lengthKonamiKey = arrayBufferNonami.length; // Nombre valeur dans le tableau
  console.log(lengthKonamiKey);
  // Si c'est le 1er élément du tableau.
  if (lengthKonamiKey === 0) {
    console.log("1", e.key);
    arrayBufferNonami.push(e.key); // Ajoute le résultat dans le tableau à la suite.
  }
  // Condition Suivante
  /*
     Si le nombres d'éléments du tableau des touches présées est égale 
     au nombre d'éléments de la clé secrete.
    
     konamiSecret.length -1 | 0 à x valeurs.
     
     Si la touche appuyèe correspont on déclenche le changement de style.
     */
  else if (lengthKonamiKey === konamiSecret.length - 1) {
    // On parcourt le tableau des dernières touches appuyées.
    arrayBufferNonami.forEach((element, index) => {
      /*
        On verifie si une touche enregistré est différente dans le tableau en comparent
        les index de la clé secret Konami && on vérifie si la dernière touche appuyées 
        est différente de la dernière valeur de la clé.

        Si c'est le  cas on remet à zéro les touches dernièrements enregistrées
        et on arrête laboucle.
    */
      if (
        element !== konamiSecret[index] &&
        e.key.toLowerCase() !==
          konamiSecret[konamiSecret.length - 1].toLowerCase()
      ) {
        arrayBufferNonami = [];
        return;
      }
    });
    alert("Konami"); // Resultat
  }
  //Sinon
  else {
    /* DEBUG
      console.log(
        e.key.toLowerCase(),
        konamiSecret[keyLength].toLowerCase(),
        keyLength
    );
    */

    /*
      On s'assure que la touche appuyées est identique à l'index en cours de la clé secret Konami
    */
    if (e.key.toLowerCase() === konamiSecret[lengthKonamiKey].toLowerCase()) {
      arrayBufferNonami.push(e.key); // Ajoute le résultat dans le tableau à la suite.
      return;
    }
    // Sinon on remet à zéro les touches dernièrements enregistrées
    else {
      arrayBufferNonami = [];
    }
  }
  console.log(arrayBufferNonami);
  console.trace();
};
/* 
    /!\ Deprecated keypress
    Nous allons écouter l'élément Window
    si keydown (appuye sur une touche) alors (Event e) => fonction(Event e)
    */
window.addEventListener("keydown", (e) => konamiHandler(e)); // Ecouteur
