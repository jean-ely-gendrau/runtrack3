const containerProject = document.getElementById("containerProject"); // Selecteur du container du project
// Fonction Fect API post
// bodyParam les paramètres à transmètre avec la requête POST
// route : la point de déstination
const postJs = async ({ bodyParam, route }) => {
  console.log(JSON.stringify(bodyParam));
  const req = await fetch(
    `http://${window.location.hostname}/jour-4/job-04/${route}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(bodyParam),
    }
  );

  const response = await req.json();
  // Si l'erreur error no bdd est retourner par la response , on redirige vers la page install.php
  // La base de donnée n'as pas était créer, nous alons la créer avec un script PHP
  if (response === "error no bdd") {
    window.location.replace(
      `http://${window.location.hostname}/jour-4/job-04/install.php`
    );
  } else {
    return response; // Aucune erreur retour de la response
  }
};

// Function createTable , créer la table HTML avec ses enfants ainsi que la configuration des attributs
function createTable({ elements, textCaption }) {
  const tableElement = document.createElement("table"); // TABLE HTML
  tableElement.setAttribute(
    "class",
    "table table-sm table-dark w-75 table-striped m-auto"
  ); // CSS attribute
  const tbodyElement = document.createElement("tbody"); // TBODY HTML
  tbodyElement.setAttribute(
    "class",
    "table-group-divider text-warning-emphasis"
  ); // CSS attribute
  const theadElement = document.createElement("thead"); // THEAD HTML
  const captionElement = document.createElement("caption"); // CAPTION HTML
  captionElement.setAttribute("class", "text-white");

  // Parours de l'object elements utilisateurs
  elements.forEach((element, index) => {
    const rowThead = document.createElement("tr"); // TR THEAD HTML
    const rowTbody = document.createElement("tr"); // TR TBODY HTML

    // Transfome element en tableau avec comme callback ([key, val], index)
    Object.entries(element).map(([key, val], index) => {
      // DEBUG console.log(key, val, index);
      const thElement = document.createElement("th"); // TH HTML
      const keyText = document.createTextNode(key); // TEXT NODE clés du tableau
      thElement.appendChild(keyText); // On ajoute un element au thElement
      rowThead.appendChild(thElement); // On ajoute un element au rowThead

      const tdElement = document.createElement("td"); // TD HTML
      const valText = document.createTextNode(val); // TEXT NODE valeur du tableau
      tdElement.appendChild(valText); // On ajoute un element au tdElement
      rowTbody.appendChild(tdElement); // On ajoute un element au rowTbody
    });
    if (index === 0) theadElement.appendChild(rowThead); // THEAD
    tbodyElement.appendChild(rowTbody); // TBODY
  });
  captionElement.appendChild(textCaption); // CAPTION
  tableElement.append(captionElement, theadElement, tbodyElement); // Ajout de tout les élément dans la table
  return tableElement; // retourne la table
}

// Fonction addEventButton , créer les écouteurs d'événement pour les deux bouttons de la page
function addEventButton(buttonUpdate, buttonAddUser) {
  // resultUpdate
  const resultUpdate = (e) => {
    e.preventDefault();
    initProject(); // Lance la function proncipal qui retournera les résultats rafraichit , sans recharger la page?
  };
  // addUser , ajoute des utilisateurs aléatoir celon le script pho appelé avec la function postJs
  const addUser = (e) => {
    e.preventDefault();
    //API Fetch post
    const response = postJs({
      bodyParam: { action: "addUsers", number: 10 },
      route: "user.php",
    });
    // Reponse de PHP en JSON
    response.then((response) => console.log(response));
  };

  buttonUpdate.addEventListener("click", (e) => resultUpdate(e)); // Ecouteur événement click -> resultUpdate
  buttonAddUser.addEventListener("click", (e) => addUser(e)); // Ecouteur événement click -> addUser
}

// Fonction initProject
// Démarrage du project et mise à jour des résultats
function initProject() {
  const fecth = postJs({
    bodyParam: { action: "initProject" },
    route: "user.php",
  });

  const divGroup = document.createElement("div"); // HTML DIV
  divGroup.setAttribute("class", "btn-group m-auto");
  divGroup.setAttribute("role", "group");
  divGroup.setAttribute("aria-label", "groupButton");

  const buttonUpdate = document.createElement("button"); // HTML BUTTON
  buttonUpdate.setAttribute("id", "buttonUpdate");
  buttonUpdate.setAttribute("class", "btn btn-warning text-black p-2");
  buttonUpdate.textContent = "Rafraichir résultats";

  const buttonAddUser = document.createElement("button"); // HTML BUTTON
  buttonAddUser.setAttribute("id", "buttonAddUser");
  buttonAddUser.setAttribute("class", "btn btn-success text-white p-2");
  buttonAddUser.textContent = "Ajout 10 utilisateurs aléatoir";

  divGroup.append(buttonUpdate, buttonAddUser); // Ajout des bouttons de contrôle dasn la div

  const articleElement = document.createElement("article"); // HTML ARTICLE
  articleElement.setAttribute("id", "containerProject");
  articleElement.setAttribute(
    "class",
    "d-flex flex-column justify-content-center align-items-center"
  );
  const h2Element = document.createElement("h2"); // HTML H2

  h2Element.textContent = "Afficher les utilisateurs de la base de données"; // Ajout du titre

  // CAPTION de la table avec l'id et le nom en français du pokémon
  const textCaption = document.createTextNode("Listes des utilisateurs");
  fecth.then((response) => {
    const tableUsers = createTable({
      elements: response,
      textCaption: textCaption,
    }); // CREATE TABLE FUNCTION

    addEventButton(buttonUpdate, buttonAddUser);
    articleElement.append(h2Element, tableUsers, divGroup); // Ajout du titre et de la liste dans l'article

    const containerProject = document.getElementById("containerProject"); // Selecteur du container du project
    const title = document.getElementById("title"); // Selecteur du title du project

    //Si containerProject existe alors on remplace l'élément par les nouveaux résultats, sinon on ajoute simplement au DOM
    containerProject
      ? containerProject.replaceWith(articleElement)
      : document.body.insertBefore(articleElement, title.nextSibling);
  });
}
// initialise la fonction.
initProject();
