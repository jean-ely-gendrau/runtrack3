// Quand l'écran est redimensionné
onresize = (event) => {
  const headerSelector = document.querySelector("header");
  const cssElement = document.querySelectorAll("header>a");
  const elementHide = document.createElement("div");
  const buttonBurger = document.createElement("button");

  const domElementBurger = document.getElementById("buttonBurger");
  const domElementHide = document.getElementById("hideElement");

  buttonBurger.setAttribute(
    "style",
    "width:55px; height:55px; background-color: red; position: fixed; right:0; top:0;"
  );
  buttonBurger.setAttribute("id", "buttonBurger");

  elementHide.setAttribute("style", "display:none;");
  elementHide.setAttribute("id", "hideElement");

  if (window.screen.width >= 768) {
    console.log("domElementBurger");
    if (domElementBurger) {
      for (let i = 0; i < cssElement.length; i++) {
        cssElement[i].setAttribute("style", "display:inline-block");
      }
      // if(domElementHide === null) headerSelector.append(elementHide);
      domElementBurger.remove();
    }
  } else if (window.screen.width <= 767) {
    if (cssElement.length > 0) {
      for (let i = 0; i < cssElement.length; i++) {
        cssElement[i].setAttribute("style", "display:none");
      }
      console.log(domElementHide);
      // if(domElementHide === null) headerSelector.append(elementHide);
    }
    //console.log(buttonBurger)
    if (!domElementBurger) headerSelector.append(buttonBurger);
  }
};
