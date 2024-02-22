/******************************************** FUNCTIONS *****************************/
// Fonction Fect API post
// bodyParam les paramètres à transmètre avec la requête POST
// route : la point de déstination
async function postJs({ route, bodyParam, idForm }) {
  const form = document.getElementById(idForm);

  if (form || bodyParam) {
    const formData = form ? new FormData(form) : [];
    let bodyFormFormat = "";
    let bodyParamFormat = "";
    if (form) {
      console.log(form, formData);
      bodyFormFormat = Array.from(formData)
        .map(([key, val]) => {
          return `${key}=${val}`;
        })
        .join("&");
    }
    if (bodyParam) {
      bodyParamFormat = Object.entries(bodyParam)
        .map(([key, val], index) => {
          return `${key}=${val}`;
        })
        .join("&");
    }
    console.log(bodyFormFormat + "&" + bodyParamFormat);
    const res = await fetch(
      `http://${window.location.hostname}/jour-5/job-01/${route}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: bodyFormFormat + "&" + bodyParamFormat,
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

/******************************************************* PAGE HOME *******************************/
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

// initialise la fonction si le document à était chargée complétement
// Si l'adresse de la page est index.php ou /
if (
  (document.readyState === "complete" &&
    window.location.href ===
      `http://${window.location.hostname}/jour-5/job-01/index.php`) ||
  window.location.href === `http://${window.location.hostname}/jour-5/job-01/`
) {
  initProject();
}
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

/***************************** INSCRIPTION **************************/
const loadForm = () => {
  const elementForm = document.querySelector("form"); // Séléctionne la 1er balise form dans le DOM

  // Si un formumaire est présent
  if (elementForm) {
    let formDatas = new FormData(elementForm);

    // Tant qu'il y à des éléments enfant dans le formulaire - On retire 1 pour exclure le boutton
    for (let index = 0; index < elementForm.children.length - 1; index++) {
      // A chaque élément du formulaire on initialise un écouteur d'événement focusout
      // focusout du champ de fomulaire déclenche une fonction fléché anonymes asynchrone
      elementForm.children[index].addEventListener(
        "focusout",
        async (event) => {
          // On ce prémunit des événement par défaut du clavier.
          event.preventDefault();
          let ctrlInput = {}; // init ctrlInput

          // Si l'événement name est === passwordCompare
          if (event.target.name === "passwordCompare") {
            const inputPassword = document.getElementById("password"); // Sélécteur de balise password
            // Mofification de l'objet ctrlInput
            // keyInputPwd: Nom de l'élément
            // valInputPwd: Valeur de l'élément
            ctrlInput = {
              keyInputPwd: inputPassword.name,
              valInputPwd: inputPassword.value,
            };
          }

          // Définition de l'objet bodyParamAssign
          // Ce sont les paramètre à transmetre à la requête
          // action: Valeur égale à la condition à évaluer en PHP $_POST['action']
          // nameInput : Le nom de l'input à vérifier
          // valInput  : Valeur de l'input à vérifier
          bodyParamAssign = {
            action: "regEx",
            nameInput: event.target.name,
            valInput: event.target.value,
          };

          Object.assign(bodyParamAssign, ctrlInput); // On rassemble les deux objets ensemble

          // DEBUG console.log(bodyParamAssign);

          // Reqêtes asyncrone vers php
          const res = await postJs({
            bodyParam: bodyParamAssign,
            route: "jsPhp.php",
          });

          // On définit un id message-warn-{Nom de la balise en cour de focus out}
          let idWarn = `message-warn-${event.target.name}`;
          const elementWarn = document.getElementById(idWarn); // Sélection de la balise

          //DEBUG console.log(res);

          // Si le résultat de la requête retourn false
          if (res !== true) {
            // On vérifie si la balise n'est pas dans le DOM
            if (elementWarn === null) {
              // On créer une balise paragraphe
              let elementText = document.createElement("p");
              elementText.setAttribute("id", idWarn); // On définit l'id
              elementText.setAttribute("class", "text-danger"); // On définit une classe text-danger
              elementText.textContent = res; // On définit le text du paragraphe avec le message renvoyé par PHP
              event.target.after(elementText); // On ajoute l'élément après l'élément qui initialise l'événement
            }
          } else {
            //Sinon tout c'est bien passé
            // Si elementWarn existe dans le DOM
            if (elementWarn) {
              elementWarn.remove(); // On le retire.
            }
          }
        }
      );
    }
  }
};

async function submitForm(e) {
  e.preventDefault();
  console.log(e);
  const res = await postJs({
    bodyParam: { action: "addUser" },
    route: "jsPhp.php",
    idForm: "form-inscription",
  });

  console.log(res);
}

if (document.getElementById("title-signUp")) {
  //addEventListener("focusout", (event) => {});
  console.log("ok");
  const elementForm = document.getElementById("form-inscription");
  elementForm.addEventListener("submit", submitForm);
  loadForm();
}
