$(document).ready(function () {
  // Event Jquery on clicl
  $("#addButton").on("click", function () {
    let paragraph = $("<p></p>").text(
      "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie."
    ); // Création d'élément Jquery avec text
    $("body").append(paragraph); // Ajout du text dans le body
  });
});
