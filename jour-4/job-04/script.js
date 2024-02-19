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
  if (response === "error no bdd") {
    window.location.replace(
      `http://${window.location.hostname}/jour-4/job-04/install.php`
    );
  } else {
    return response;
  }
};

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

function initProject() {
  const fecth = postJs({
    bodyParam: { action: "initProject" },
    route: "user.php",
  });
  const buttonUpdate = document.createElement("button"); // HTML BUTTON
  buttonElement.setAttribute("id", "buttonUpdate");

  const buttonAddUser = document.createElement("button"); // HTML BUTTON
  buttonElement.setAttribute("id", "buttonAddUser");

  const articleElement = document.createElement("article"); // HTML ARTICLE
  const h2Element = document.createElement("h2"); // HTML H2

  h2Element.textContent = "Afficher les utilisateurs de la base de données"; // Ajout du titre

  // CAPTION de la table avec l'id et le nom en français du pokémon
  const textCaption = document.createTextNode("Listes des utilisateurs");
  fecth.then((response) => {
    const tableUsers = createTable({
      elements: response,
      textCaption: textCaption,
    }); // CREATE TABLE FUNCTION

    articleElement.append(h2Element, tableUsers); // Ajout du titre et de la liste dans l'article

    document.body.append(articleElement); // Ajout de l'article dans le body
  });
}
initProject();
