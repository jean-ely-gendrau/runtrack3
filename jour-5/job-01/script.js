// Fonction Fect API post
// bodyParam les paramètres à transmètre avec la requête POST
// route : la point de déstination
async function postJs({ route, bodyParam, idForm }) {
  const form = document.getElementById(idForm);

  if (form) {
    const formData = new formData(form);
    if (bodyParam) {
      bodyParamFormat = Object.entries(bodyParam)
        .map(([key, val], index) => {
          return `${key}=${val}`;
        })
        .join("&");
    }
    const res = await fetch(
      `http://${window.location.hostname}/jour-5/job-01/${route}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          Array.form(formData)
            .map(([key, val], index) => {
              return `${key}=${val}`;
            })
            .join("&") + bodyParamFormat,
      }
    );

    const response = await res.json();
    // Si l'erreur error no bdd est retourner par la response , on redirige vers la page install.php
    // La base de donnée n'as pas était créer, nous alons la créer avec un script PHP
    if (response === "error no bdd") {
      window.location.replace(
        `http://${window.location.hostname}/jour-5/job-01/install.php`
      );
    } else {
      return response; // Aucune erreur retour de la response
    }
  } else {
    return false;
  }
}

// Fonction addEventButton , créer les écouteurs d'événement pour les deux bouttons de la page
function addEventButton(buttonSignIn, buttonSignUp) {
  // resultUpdate
  const connectPage = (e) => {
    e.preventDefault();
    window.location.replace(
      `http://${window.location.hostname}/jour-5/job-01/connexion.php`
    );
  };
  // addUser , ajoute des utilisateurs aléatoir celon le script pho appelé avec la function postJs
  const addUser = (e) => {
    e.preventDefault();
    //API Fetch post
    window.location.replace(
      `http://${window.location.hostname}/jour-5/job-01/inscription.php`
    );
  };

  buttonSignIn.addEventListener("click", (e) => connectPage(e)); // Ecouteur événement click -> window.location.rerplace -> connexion
  buttonSignUp.addEventListener("click", (e) => addUser(e)); // Ecouteur événement click -> window.location.rerplace -> inscription
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

  const buttonSignIn = document.createElement("button"); // HTML BUTTON
  buttonSignIn.setAttribute("id", "buttonSignIn");
  buttonSignIn.setAttribute("class", "btn btn-warning text-black p-2");
  buttonSignIn.textContent = "Connection";

  const buttonSignUp = document.createElement("button"); // HTML BUTTON
  buttonSignUp.setAttribute("id", "buttonSignUp");
  buttonSignUp.setAttribute("class", "btn btn-success text-white p-2");
  buttonSignUp.textContent = "Inscription";

  divGroup.append(buttonSignIn, buttonSignUp); // Ajout des bouttons de contrôle à l'intérieur la div

  const articleElement = document.createElement("article"); // HTML ARTICLE
  articleElement.setAttribute("id", "containerProject");
  articleElement.setAttribute(
    "class",
    "d-flex flex-column justify-content-center align-items-center"
  );
  const h2Element = document.createElement("h2"); // HTML H2

  h2Element.textContent = "Module de connexion JS - PHP"; // Ajout du titre

  articleElement.append(h2Element, divGroup); // Ajout du titre et de la liste dans l'article

  addEventButton(buttonSignIn, buttonSignUp);
  const title = document.getElementById("title"); // Selecteur du title du project

  if (res) {
    // Reponse promise
    res.then((response) => {
      const messageUser = document.createElement("p");
      // Message à lutilisateur
      messageUser.textContent = `Bienvenu ${response.prenom}`;

      const containerProject = document.getElementById("containerProject"); // Selecteur du container du project

      //Si containerProject existe alors on remplace l'élément par les nouveaux résultats, sinon on ajoute simplement au DOM
      containerProject
        ? containerProject.replaceWith(articleElement)
        : document.body.insertBefore(articleElement, title.nextSibling);
    });
  } else {
    document.body.insertBefore(articleElement, title.nextSibling);
  }
}
// initialise la fonction.
initProject();

document.getElementById("form-connexion")?.addEventListener(
  "submit",
  (e) =>
    async function (e) {
      e.preventDefault();

      const res = await postJs({
        bodyParam: { action: "connectUser" },
        route: "jsPhp.php",
        idForm: "form-connexion",
      });
    }
);

document.getElementById("form-inscription")?.addEventListener(
  "submit",
  (e) =>
    async function (e) {
      e.preventDefault();

      const res = await postJs({
        bodyParam: { action: "addUser" },
        route: "jsPhp.php",
        idForm: "form-inscription",
      });
    }
);
