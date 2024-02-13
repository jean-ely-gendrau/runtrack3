const konamiHandler = (e) => {
  /* initialisation du tableau qui contiendra
     les dernières touches appuyées.
  */
  let arrayBufferNonami = [];

  // Le code secret des touches appuyées. Ne faite par attention au majuscule et minuscule, nous verrons cela après.
  let konamiSecret = [
    "up",
    "up",
    "down",
    "down",
    "left",
    "right",
    "left",
    "right",
    "A",
    "B",
  ];

  let lengthKonamiKey = arrayBufferNonami.length - 1; // Nombre valeur dans le tableau - 1

  if (arrayBufferNonami.length === konamiSecret.length) {
    /* Ici le code si l'utilisateur trouve le secret Konami */
  } else {
    if (lengthKonamiKey === 0) {
      arrayBufferNonami.push(e.key);
    } else {
      arrayBufferNonami.forEach((element, index) => {
        if (element === konamiSecret[index]) {
        }
      });
    }
  }
};
/* 
    Nous allons écouter l'élément Window
    si keypress (appuye sur une touche) alors (Event e) => fonction(Event e)
*/
window.addEventListener("keypress", (e) => konamiHandler(e)); // Ecouteur
