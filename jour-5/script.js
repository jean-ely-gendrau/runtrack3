async function postJs({ route, bodyParam, idForm }) {
  const form = document.getElementById(idForm);
  const formData = new formData(form);
  const res = await fetch(
    `http://${window.location.hostname}/jour-5/${route}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: Array.form(([key, val], index) => {
        return `${key}=${val}`;
      }).join("&"),
    }
  );

  return await res.json();
}
// Fonction initProject
async function initProject() {
  const res = await postJs({
    bodyParam: { action: "initProject" },
    route: "jsPhp.php",
    idForm: "form-inscription",
  });

  const divGroup = document.createElement("div"); // HTML DIV
  divGroup.setAttribute("class", "btn-group m-auto");
  divGroup.setAttribute("role", "group");
  divGroup.setAttribute("aria-label", "groupButton");

  const buttonUpdate = document.createElement("button"); // HTML BUTTON
  buttonUpdate.setAttribute("id", "buttonUpdate");
  buttonUpdate.setAttribute("class", "btn btn-warning text-black p-2");
  buttonUpdate.textContent = "Inscription";

  const buttonAddUser = document.createElement("button"); // HTML BUTTON
  buttonAddUser.setAttribute("id", "buttonAddUser");
  buttonAddUser.setAttribute("class", "btn btn-success text-white p-2");
  buttonAddUser.textContent = "Connection";

  divGroup.append(buttonUpdate, buttonAddUser); // Ajout des bouttons de contrôle dasn la div

  const articleElement = document.createElement("article"); // HTML ARTICLE
  articleElement.setAttribute("id", "containerProject");
  articleElement.setAttribute(
    "class",
    "d-flex flex-column justify-content-center align-items-center"
  );
  const h2Element = document.createElement("h2"); // HTML H2

  h2Element.textContent = "Module de connexion JS - PHP"; // Ajout du titre

  // Reponse promise
  fecth.then((response) => {
    const messageUser = document.createElement("p");
    // Message à lutilisateur
    messageUser.textContent = `Bienvenu ${response.prenom}`;

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
