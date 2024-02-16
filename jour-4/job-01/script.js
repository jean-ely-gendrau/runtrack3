const buttonClick = document.getElementById("button");

const fetchTxt = (e) => {
  /* On prend le contrôle sur l'évenement */
  e.preventDefault();

  /* Fonction fléchéé asynchrone - récupérer le fichier d'expression */
  const resultTxt = async () => {
    try {
      const response = await fetch("./expression.txt");
      const response_1 = await response.text();
      return response_1; // return reponse text
    } catch (error) {
      return `Erreur : ${error}`; // Erreur
    }
  };
  const resultData = resultTxt();

  // Function affichage du text
  function shownText(data) {
    const elementP = document.createElement("p"); // création d'un élément paragraphe
    if (!data.error) {
      elementP.textContent = data; // Ajouter du text au paragraphe
    } else {
      console.error(data.error); // Affichage de l'erreu dans la console

      elementP.textContent =
        "Une erreur vient de se produire, merci de ressayer ultérieurement, si le problème persiste, contacter l'administrateur";
    }
    document.body.append(elementP); // Ajout de l'élément paragraphe dans le body
  }
  resultData.then((data) => shownText(data)); // Résultat de la promise
};

buttonClick.addEventListener("click", (e) => fetchTxt(e)); // Ecouteur d'événement.
