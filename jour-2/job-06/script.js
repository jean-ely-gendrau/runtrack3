const konamiHandler = (e) => {
  let arrayBufferNonami = [];
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
  if (arrayBufferNonami.length === konamiSecret.length) {
    /* Ici le code si l'utilisateur trouve le secret Konami */
  } else {
    /* Sinon on va appliqué quelques actions */
  }
};
/* 
    Nous allons écouter l'élement Window 
    si keypress (appuye sur une touche) alors (Event e) => fonction(Event e)
*/
window.addEventListener("keypress", (e) => konamiHandler(e)); // Ecouteur
