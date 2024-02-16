const buttonClick = document.getElementById("button"); // SELECTOR button
const keyText = document.getElementById("keyText"); // SELECTOR keyText

// Json Objet
const jsonData = {
  name: "Toulon",
  address: "Av. Franklin Roosevelt",
  city: "Toulon",
  codePos: "83000",
  creation: "2023",
};

// Fonction jsonValueKey prend en  er paramètre un tableau Json au format chaîné de caractère(string)
function jsonValueKey(jsonData, id) {
  // On parse jsondata pour le transformer à son état initial Objet
  const jsonParse = JSON.parse(jsonData);

  const key = id ? id : "name"; // Définition de la clé si elle est vide

  // Si la clé existe dans l'objet
  if (jsonParse.hasOwnProperty(key)) {
    //DEBUG console.log(jsonParse, key, jsonParse[key]);

    const paragraph = document.createElement("p"); // Création de la balise paragraphe
    paragraph.textContent = jsonParse[key]; // ajout du texte a la balise
    document.body.append(paragraph); // ajout de l'élément dans le body
  } else
    alert(
      "Ooops une erreur s'est produite, vérifier la clé entrer ou contacter l'administrateur"
    );
}
buttonClick.addEventListener("click", () =>
  jsonValueKey(JSON.stringify(jsonData), keyText.value)
); // Écouteur d'événement.
