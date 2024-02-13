const Scrolling = (e) => {
  /*
  Déstucturation de document.documentElement
  On récupère dirrectement toutes les proprètés de l'object
  à l'intérieur des acolades.
  
  scrollTop    => valeur du scroll en cour à partir du haut du dociument
  clientHeight => Hauteur de la fenêtre client (navigateur)
  scrollHeight => Hauteur total du document.
*/
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  scrollValu = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100);
  return console.log(scrollTop, clientHeight, scrollHeight, scrollValu);
};
document.addEventListener("scroll", (e) => Scrolling(e));
