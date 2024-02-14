/* initialisation du tableau qui contiendra
   les dernières touches appuyées.

   Lors des précedant test le tableau était écrasser à chaque chargement.
   Changont la porter du tableau en dehos de la fonction et remplaçon let par var
*/
var arrayBufferNonami = [];

const konamiHandler = (e) => {
  // DEBUG console.log(e.key);

  // Exclure les touches Coontrole et F5 du preventDefault afin de laisser rafraichir la page
  let keyNoPrevent = ["Control", "F5"];
  if (!keyNoPrevent.includes(e.key)) {
    e.preventDefault();
  }
  // Le code secret des touches appuyées. Ne faite par attention aux majuscules et minuscules, nous verrons cela après.
  let konamiSecret = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "a",
    "b",
  ];
  // Si la touche pressées ne figure pas dans le tableau on reset le tableau et on stop.
  if (!konamiSecret.includes(e.key)) {
    arrayBufferNonami = [];
    return;
  }

  /* lengthKonamiKey = Nombre de valeur dans le tableau

    On ne retire pas 1 au résultat de length ici. En effet 
    on n'ajoutera pas la dernière touche appuyé au tableau
    nous verifirons directement sa valeur quand nous aurons 
    atteint l'index de konamiSecret[lengthKonamiKey -1]
  */
  let lengthKonamiKey = arrayBufferNonami.length;

  // Si c'est le 1er élément du tableau.
  if (lengthKonamiKey === 0) {
    arrayBufferNonami.push(e.key); // Ajoute le résultat dans le tableau à la suite.
  }
  // Condition Suivante
  /*
     Si le nombres d'éléments du tableau des touches 
     présées est égale au nombre d'éléments de la clé secrete.
     konamiSecret.length -1 | exemple : 0 à x valeurs.
     Si la touche appuyèe correspont on déclenche le changement de style.
     */
  else if (lengthKonamiKey === konamiSecret.length - 1) {
    // On parcourt le tableau des dernières touches appuyées.
    arrayBufferNonami.forEach((element, index) => {
      /*
        On verifie si une touche enregistré est différente dans le tableau en comparent
        les index de la clé secret Konami && on vérifie si la dernière touche appuyées 
        est différente de la dernière valeur de la clé.
        Si c'est le  cas on remet à zéro les touches dernièrements enregistrées
        et on arrête la boucle.
    */
      if (
        element !== konamiSecret[index] &&
        e.key.toLowerCase() !==
          konamiSecret[konamiSecret.length - 1].toLowerCase()
      ) {
        arrayBufferNonami = [];
        return;
      }
    });

    // Selection des éléments sur la page
    let selectElement = document.querySelectorAll("h1,p");

    // Création de nouveau élément à ajouter à la page
    let elementArticle = document.createElement("header");
    let elementArticleMiddle = document.createElement("article");
    let elementDiv = document.createElement("div");
    let elementH1 = document.createElement("h1");
    let elementP = document.createElement("p");

    // Attribution de class et de text H1
    elementH1.setAttribute("class", "header-h1");
    elementH1.textContent = "La Plateforme Formation";

    // Attribution de class et de text P
    elementP.setAttribute("class", "header-p");
    elementP.textContent =
      "La Plateforme le campus méditerranéen du numérique ! Des parcours frais de scolarité à zéro euros, ouverts à tous les talents, sans conditions de ressources et de diplômes. Un lieu de rencontre entre entreprises et apprenants pour le bénéfice de tous !";

    // Attribution de class et ajout des éléments enfants à lélément parent
    elementDiv.setAttribute("class", "wrapped-title");
    elementDiv.appendChild(elementH1);
    elementDiv.appendChild(elementP);

    // Attribution de class ajout de l'élément enfant à lélément parent
    elementArticle.setAttribute("class", "in-article");
    elementArticle.appendChild(elementDiv);

    elementArticleMiddle.setAttribute("class", "in-article");
    // Parcourt les élément séléctionner précedament, puis on les ajoutes ajoute à l'élément parent.
    selectElement.forEach((element) => {
      elementArticleMiddle.appendChild(element);
    });

    // Ajout des élèment avant tout les autres dans le body
    document.body.prepend(elementArticle, elementArticleMiddle);
  }
  //Sinon
  else {
    /* DEBUG
      console.log(
        e.key.toLowerCase(),
        konamiSecret[keyLength].toLowerCase(),
        keyLength
    );
    */

    /*
      On s'assure que la touche appuyées est identique à l'index en cours de la clé secret Konami
      On passe les valeur en minuscule pour un peu plus de facilité.
    */
    if (e.key.toLowerCase() === konamiSecret[lengthKonamiKey].toLowerCase()) {
      arrayBufferNonami.push(e.key); // Ajoute le résultat dans le tableau à la suite.
    }
    // Sinon on remet à zéro les touches dernièrements enregistrées
    else {
      arrayBufferNonami = [];
    }
  }
  console.log(arrayBufferNonami);
  console.trace();
};
/* 
    /!\ Deprecated keypress
    Nous allons écouter l'élément Window
    si keydown (appuye sur une touche) alors (Event e) => fonction(Event e)
    */
window.addEventListener("keydown", (e) => konamiHandler(e)); // Ecouteur
