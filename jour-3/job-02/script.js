const combinaisonGagnante = [
  "drop-one_arc1.png",
  "drop-two_arc2.png",
  "drop-three_arc3.png",
  "drop-four_arc4.png",
  "drop-five_arc5.png",
  "drop-six_arc6.png",
];

let combinaisonActive = [];

function checkingWinner() {
  if (
    combinaisonActive.length === 6 &&
    combinaisonActive.toString() === combinaisonGagnante.toString()
  ) {
    let message = $("<p></p>")
      .text("Vous avez gagné")
      .addClass("result colorGreen");
    $(".wrap").append(message);
  } else if (
    combinaisonActive.length === 6 &&
    combinaisonActive.toString() !== combinaisonGagnante.toString()
  ) {
    let message = $("<p></p>")
      .text("Vous avez perdu")
      .addClass("result colorRed");
    $(".wrap").append(message);
  }
}
function randomImage() {
  // Sélectionne les éléments dans le conteneurs
  elementsImg = $(".draggable-box").find("*");
  elementsImg.remove(); // Suppréssion des élement du DOM

  // array des clé des éléments précédament sélectionné - tout en filtrant les résultats et exclures certaine clé de celui-çi
  keyImage = Object.keys(elementsImg).filter(
    (item) => item != "length" && item != "prevObject"
  );

  // On parcourt le tableau avec la function each Jquery
  $(keyImage).each(function () {
    // On définit un nombre aléatoire à partir de notre tableau keyImage
    indexRandom = Math.floor(Math.random() * keyImage.length);

    // On ajoute l'élément dans le DOM
    $(".draggable-box").append($(elementsImg[keyImage[indexRandom]]));

    // On retire la valeur du tableau keyImage
    keyImage.splice(indexRandom, 1);
  });
  // Initialisation de l'écouteur draggable
  $(".draggable-box").find("*").draggable({ revert: "invalid" });
}

$(document).ready(function () {
  // Event Jquery on click
  $("#addButton").on("click", function () {
    randomImage(); // Ramdom Image
  });

  // Initialisation de l'écouteur draggable
  $(".draggable-box").find("*").draggable({ revert: "invalid" });

  // Initialisation de l'écouteur dropover
  $(".drop").on("dropover", function (event, ui) {
    console.log(event, ui);
  });

  // Initialisation de l'écouteur dropdeactivate
  $("drop").on("dropdeactivate", function (event, ui) {
    console.log(event, ui);
  });

  // Initialisation de l'écouteur droppable
  $(".drop").droppable({
    drop: function (event, ui) {
      const { target, originalEvent } = event; // Object Event
      const { draggable } = ui;
      const idElementEvent = originalEvent.target.id; // id de l'éléments image
      let imageElement = $(`#${idElementEvent}`); // Element image

      const fileName = draggable[0]?.currentSrc?.split(/(\\|\/)/g).pop(); // Récupèrer le nom du fichier image

      combinaisonActive.push(`${target.id}_${fileName}`); // Ajout de l'id du conteneur de l'élément et du nomde l'image au tableau, format : idName_nameImage
      // DEBUG_Combinaison console.log(combinaisonActive);

      checkingWinner(); // Vérifie si le joueur gagne

      $(`#${target.id}`)
        .append(imageElement) // Ajoute l'élément dans le DOM
        .removeClass("ui-widget-content ui-droppable");
      // Définition de style pour ajuster l'image en Hauteur et largeur après le déplacement.
      $(`#${idElementEvent}`).attr(
        "style",
        "width: 65px; heigth: 175px; margin:auto;"
      );
    },
  });
});
