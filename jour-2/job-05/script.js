const scrollingDocument = (e) => {
  /*
  Déstucturation de document.documentElement
  On récupère dirrectement toutes les proprètés de l'object
  à l'intérieur des acolades.

  scrollTop    => valeur du scroll en cour à partir du haut du document
  clientHeight => Hauteur de la fenêtre client (navigateur)
  scrollHeight => Hauteur total du document.
*/
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  scrollValu = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100); // Pourcentage de défilement à partir du haut.

  /*
    La fonction fléché footerOpacity prend un paramétre :
    -> scrollValu 
    transmis par l'écouteur d'évenement :
    -> document.addEventListener("scroll", (e) => scrollingDocument(e));

    Elle mets à jour la valeur de l'attribut opacity de l'élements selectionné : 
    -> document.querySelector("footer.footer")
  */
  const footerOpacity = (scrollValu) =>
    (document.querySelector("footer.footer").style.opacity = scrollValu / 100);

  footerOpacity(scrollValu); // Execution de la fonction fléché

  /* DEBUG
  return console.log(
    scrollTop,
    clientHeight,
    scrollHeight,
    scrollValu,
    scrollValu / 100
  );
  */
};

document.addEventListener("scroll", (e) => scrollingDocument(e)); // Ecouteur d'évenement scroll
