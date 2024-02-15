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
}

$(document).ready(function () {
  // Event Jquery on clicl
  $("#addButton").on("click", function () {
    randomImage();
  });

  $(".draggable-box").find("*").draggable({ revert: "invalid" });

  $(".drop").on("dropover", function (event, ui) {
    console.log(event, ui);
  });

  $("drop").on("dropdeactivate", function (event, ui) {
    console.log(event, ui);
  });

  $(".drop").droppable({
    drop: function (event, ui) {
      console.log(event, ui);
    },
  });
});
