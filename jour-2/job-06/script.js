const konamiHandler = (e) => {
  e.preventDefault();
  /* initialisation du tableau qui contiendra
     les dernières touches appuyées.
  */
  let arrayBufferNonami = [];

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

  let lengthKonamiKey =
    arrayBufferNonami.length > 0 ? arrayBufferNonami.length - 1 : 0; // Nombre valeur dans le tableau - 1
  console.log(arrayBufferNonami);
  // Si c'est le 1er élément du tableau.
  if (lengthKonamiKey === 0) {
    console.log(e.key);
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
      On s'assure que le résultat est identique selon le positionnement de l'index.
      Et aussi que la touche dernièrement capturée par l'écouteur d'événement
      est identique à l'index final de la clé secret Konami | ainsi si la dernière valeur ne correspont pas on arrête la boucle
    */
      if (
        element === konamiSecret[index] &&
        e.key.toLowerCase() ===
          konamiSecret[konamiSecret.length - 1].toLowerCase()
      ) {
        alert("Konami");
      }
      // Sinon on remet à zéro les touches dernièrements enregistrées
      else {
        arrayBufferNonami = [];
      }
    });
  }
  //Sinon
  else {
    // On parcourt le tableau des dernières touches appuyées.
    arrayBufferNonami.forEach((element, index) => {
      /*
          On s'assure que le résultat est identique selon le positionnement de l'index.
          Et aussi que la touche dernièrement capturée par l'écouteur d'événement
          est identique à l'index en cours de la clé secret Konami | ainsi si la dernière valeur ne correspont pas on arrête la boucle
        */
      if (
        element === konamiSecret[index] &&
        e.key.toLowerCase() ===
          konamiSecret[konamiSecret.length - 1 - lengthKonamiKey].toLowerCase()
      ) {
        console.log(e.key);
        arrayBufferNonami.push(e.key); // Ajoute le résultat dans le tableau à la suite.
      }
      // Sinon on remet à zéro les touches dernièrements enregistrées
      else {
        arrayBufferNonami = [];
      }
    });
  }
};
/* 
    /!\ Deprecated keypress
    Nous allons écouter l'élément Window
    si keydown (appuye sur une touche) alors (Event e) => fonction(Event e)
*/
window.addEventListener("keydown", (e) => konamiHandler(e)); // Ecouteur
