// Quand l'écran est redimensionné
onresize = (event) => {
  event.preventDefault();
  const headerSelector = document.querySelector("header"); // Sélecteur du header
  const cssElement = document.querySelectorAll("header>a"); // Sélection des liens dans le header

  const buttonBurger = document.createElement("button"); // Création du bputton buger
  const domElementBurger = document.getElementById("buttonBurger"); // Sélecteur du boutton burger

  // Attribution de style pour le boutton
  buttonBurger.setAttribute(
    "style",
    "width:55px; height:55px; background-color: blue; color: #fff; position: fixed; right:0; top:0;"
  );
  buttonBurger.textContent = "bb";
  // Attribution d'un id pour le sélectionner
  buttonBurger.setAttribute("id", "buttonBurger");

  // Fonction flécher pour faire disparître ou apparaître les liens dans le headers
  const switchDisplayLink = (hide) => {
    // Si il y à des éléments
    if (cssElement.length > 0) {
      // Pour chaque élement
      for (let i = 0; i < cssElement.length; i++) {
        if (hide) {
          cssElement[i].setAttribute("style", "display:none"); // Alors on fait disparaître display:none
        } else if (hide === false) {
          cssElement[i].setAttribute("style", "display:inline-block");
        } else {
          // Si .style.display == "inline-block"
          cssElement[i].style.display === "inline-block"
            ? cssElement[i].setAttribute("style", "display:none") // Alors on fait disparaître display:none
            : cssElement[i].setAttribute("style", "display:inline-block"); // Sinon display:inline-block
        }
      }
    }
  };

  // Si la taille de la fenêtre est supérieur ou égal à 768
  if (window.screen.width >= 768) {
    if (domElementBurger) {
      switchDisplayLink(false); // Appel de la fonction
      domElementBurger.remove(); // On retrire le button burger de l'affichage
    }
  }
  // Si la valeur de la largeur de la fenêtre est inférieur ou égale à 768
  else if (window.screen.width <= 767) {
    // Si le button burger n'est pas dans le DOM
    if (!domElementBurger) {
      switchDisplayLink(true); // Appel de la fonction
      headerSelector.append(buttonBurger); // On ajoute le boutton burger dans le DOM
    }
  }
  // Si le boutton burger est dans le DOM
  if (domElementBurger)
    domElementBurger.addEventListener("click", () => switchDisplayLink(null)); // écouteur d'évenement 'click' alors on appel la fonction.
};
