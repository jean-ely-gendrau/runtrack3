// Quand l'écran est redimensionné
onresize = (event) => {
  event.preventDefault();
  const headerSelector = document.querySelector("header"); // Sélecteur du header
  const cssElement = document.querySelectorAll("header>a"); // Sélection des liens dans le header

  const buttonBurger = document.createElement("button"); // Création du bputton buger
  const domElementBurger = document.getElementById("buttonBurger"); // Sélecteur du boutton burger

  buttonBurger.setAttribute(
    "style",
    "width:55px; height:55px; background-color: red; position: fixed; right:0; top:0;"
  );
  buttonBurger.setAttribute("id", "buttonBurger");

  const switchDisplayLink = (e) => {
    if (cssElement.length > 0) {
      for (let i = 0; i < cssElement.length; i++) {
        cssElement[i].style.display == "inline-block"
          ? cssElement[i].setAttribute("style", "display:none")
          : cssElement[i].setAttribute("style", "display:inline-block");
      }
    }
  };

  if (window.screen.width >= 768) {
    if (domElementBurger) {
      switchDisplayLink();
      domElementBurger.remove();
    }
  } else if (window.screen.width <= 767) {
    if (!domElementBurger) {
      switchDisplayLink();
      headerSelector.append(buttonBurger);
    }
  }

  if (domElementBurger)
    domElementBurger.addEventListener("click", () => switchDisplayLink());
};
