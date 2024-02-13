const button = document.getElementById("button"); // Selecteur

if (button) {
  /*
    La fonction addOne ne prend aucun params
    Elle est appélé par l'écouteur d'évenement click button id="button"
    à chaque clique on incrémente le compteur.
  */
  function addOne() {
    const compteur = document.getElementById("compteur"); // Selecteur
    compteur.textContent(compteur.textContent++); // Incrémentation
  }
  button.addEventListener("click", addOne); // Ecouteur
}
