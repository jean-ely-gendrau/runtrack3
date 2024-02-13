const keylogger = document.getElementById("keylogger"); // Selecteur

// Si l'élement existe
if (keylogger) {
  /*
    La fonction addText prend un paramètre évènement qui est
    transmis par l'écouteur d'évenement au losqua une touche
    est appuyer par le clavier dans la fenêtres et le document.
  */
  function addText(e) {
    /*
     méthod preventDefault rattachée à Event indique à l'agent utilisateur de na pas exécuter les actions par défaut.
     Si on commente cette ligne, lorsque le focus se trouve sur le textarea cela ajouterai trois caractère.
     1er celui de la fonction ternaire.
     2éme celui du focus de la fonction ternaire.
     3éme l'action par défault d'un textarea c'est de recevoir du text lors de l'appuie clavier.

     e.preventDefault(); Permet de bloqué ce comportement losque nous voulons gérer implicitement l'action à éffectuer.
     */
    e.preventDefault();

    //DEBUG console.log(document.activeElement);

    /*  FONCTION TERNAIRE
      si on à le focus sur keylogger
      alors on reprend la valeur de textarea et on ajoute la touche appuyer 2 fois.
      sinon on reprend la valeur de textarea et on ajoute la touche appuyer 1 fois.
    */
    keylogger.value =
      // Condition
      document.activeElement.id === "keylogger"
        ? // Si
          keylogger.value + e.key + e.key
        : // Sinon
          keylogger.value + e.key;
  }
  // Window keypress (Event e) => fonction(Event e)
  window.addEventListener("keypress", (e) => addText(e)); // Ecouteur
}
