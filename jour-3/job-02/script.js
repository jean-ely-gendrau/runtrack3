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
      const idElementEvent = originalEvent.target.id; // id de l'éléments image
      let imageElement = $(`#${idElementEvent}`); // Element image

      //DEBUG console.log(target.id);

      $(`#${target.id}`).append(imageElement); // Ajoute l'élément dans le DOM
      // Définition de style pour ajuster l'image en Hauteur et largeur après le déplacement.
      $(`#${idElementEvent}`).attr(
        "style",
        "width: 65px; heigth: 175px; margin:auto;"
      );
    },
  });
});
