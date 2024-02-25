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
      `https://${window.location.hostname}/jour-5/job-01/${route}`,
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
        `https://${window.location.hostname}/jour-5/job-01/install.php`
      );
    } else {
      return response; // Aucune erreur retour de la response
    }
  } else {
    return false;
  }
}

// RegEx Javascript fortmulaire
function validateInput(keyInput, valuesInput) {
  switch (keyInput) {
    case "nom":
    case "prenom":
      if (/^(\w{3,25})$/.test(valuesInput)) {
        return true; // Si le masque est bon true
      }
      return {
        [keyInput]:
          "Votre " +
          (keyInput === "nom" ? "nom" : "prénom") +
          " n'est pas conforme",
      }; // si la condition n'a pas été remplie alors on retourne un message d'erreur

    case "email":
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valuesInput)) {
        return true; // Si le masque est bon true
      }
      return {
        [keyInput]: "Votre adresse email n'a pas un format valide.",
      }; // si la condition n'a pas été remplie alors on retourne un message d'erreur

    case "password":
      if (
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\%\$\,\;\!\-_])[a-zA-Z0-9\%\$\,\;\!\-_]{6,25}$/.test(
          valuesInput
        )
      ) {
        return true; // Si le masque est bon true
      }
      return {
        [keyInput]:
          "Votre mot de passe doit être conforme au modèle exemple : A12xHs5a!25",
      }; // si la condition n'a pas été remplie alors on retourne un message d'erreur

    case "passwordCompare":
      const valInputPwd = document.getElementById("password").value;
      if (
        valInputPwd &&
        valInputPwd === valuesInput &&
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\%\$\,\;\!\-_])[a-zA-Z0-9\%\$\,\;\!\-_]{6,25}$/.test(
          valuesInput
        )
      ) {
        return true; // Si le masque est bon true
      }
      return { [keyInput]: "Les deux mots de passe ne sont pas identiques" }; // si la condition n'a pas été remplie alors on retourne un message d'erreur

    default:
      return false; // Si aucune clé input n'a été trouvée.
  }
}

// Fonction addEventButton , créer les écouteurs d'événement pour les deux bouttons de la page
function addEventButton(buttonSignIn, buttonSignUp) {
  // resultUpdate
  const connectPage = (e) => {
    e.preventDefault();
    window.location.replace(
      `https://${window.location.hostname}/jour-5/job-01/connexion.php`
    );
  };
  // addUser , ajoute des utilisateurs aléatoir celon le script pho appelé avec la function postJs
  const addUser = (e) => {
    e.preventDefault();
    //API Fetch post
    window.location.replace(
      `https://${window.location.hostname}/jour-5/job-01/inscription.php`
    );
  };

  buttonSignIn.addEventListener("click", (e) => connectPage(e)); // Ecouteur événement click -> window.location.rerplace -> connexion
  buttonSignUp.addEventListener("click", (e) => addUser(e)); // Ecouteur événement click -> window.location.rerplace -> inscription
}

function addAndCleanErrorHtmlMessage(key, objectMessage) {
  // On définit un id message-warn-{Nom de la balise en cour de focus out}
  let idWarn = `message-warn-${key}`;
  const elementWarn = document.getElementById(idWarn); // Sélection de la balise
  const elementError = document.getElementById(key); // Séléction de l'élément ou il y à une erreur
  //DEBUG console.log(res);

  // Si le résultat de la requête retourn false
  if (objectMessage !== true) {
    // On vérifie si la balise n'est pas dans le DOM
    if (elementWarn === null) {
      // On créer une balise paragraphe
      let elementText = document.createElement("p");
      elementText.setAttribute("id", idWarn); // On définit l'id
      elementText.setAttribute("class", "text-danger"); // On définit une classe text-danger
      elementText.textContent = objectMessage[key]; // On définit le text du paragraphe avec le message renvoyé par PHP
      elementError.after(elementText); // On ajoute l'élément après l'élément qui initialise l'événement
    }
  } else {
    //Sinon tout c'est bien passé
    // Si elementWarn existe dans le DOM
    if (elementWarn) {
      elementWarn.remove(); // On le retire.
    }
  }
}
/******************************************************* PAGE HOME *******************************/
async function diconnectUser(e) {
  e.preventDefault();

  const res = await postJs({
    route: "JsPhp.php",
    bodyParam: { action: "disconnectUser" },
  });

  if (res) {
    window.location.reload();
  }
}

// Fonction initProject
async function initProject() {
  const res = await postJs({
    bodyParam: { action: "initProject" },
    route: "jsPhp.php",
    idForm: "form-inscription",
  });
  console.log("initProject  > res", res);

  const articleElement = document.createElement("article"); // HTML ARTICLE
  articleElement.setAttribute("id", "containerProject");
  articleElement.setAttribute(
    "class",
    "d-flex flex-column justify-content-center align-items-center"
  );
  const h2Element = document.createElement("h2"); // HTML H2

  h2Element.textContent = "Module de connexion JS - PHP"; // Ajout du titre

  articleElement.append(h2Element); // Ajout du titre dans l'article

  const title = document.getElementById("title"); // Selecteur du title du project

  if (Object.keys(res).length > 0) {
    // Reponse promise
    console.log(res);

    const buttonSignOut = document.createElement("button"); // HTML BUTTON
    buttonSignOut.setAttribute("id", "buttonSignOut");
    buttonSignOut.setAttribute("class", "btn btn-danger text-black p-2");
    buttonSignOut.textContent = "Déconnexion";

    const messageUser = document.createElement("p");
    messageUser.setAttribute("class", "text-center fs-1 fs-bold");
    // Message à lutilisateur

    messageUser.textContent = `Bienvenu ${res.prenom}`;

    articleElement.append(messageUser, buttonSignOut); // Ajout du titre et de la liste dans l'article

    const containerProject = document.getElementById("containerProject"); // Selecteur du container du project

    //Si containerProject existe alors on remplace l'élément par les nouveaux résultats, sinon on ajoute simplement au DOM
    containerProject
      ? containerProject.replaceWith(articleElement)
      : document.body.insertBefore(articleElement, title.nextSibling);

    buttonSignOut.addEventListener("click", diconnectUser);
  } else {
    const divGroup = document.createElement("div"); // HTML DIV
    divGroup.setAttribute("class", "btn-group m-auto");
    divGroup.setAttribute("role", "group");
    divGroup.setAttribute("aria-label", "groupButton");

    const buttonSignIn = document.createElement("button"); // HTML BUTTON
    buttonSignIn.setAttribute("id", "buttonSignIn");
    buttonSignIn.setAttribute("class", "btn btn-warning text-black p-2");
    buttonSignIn.textContent = "Connexion";

    const buttonSignUp = document.createElement("button"); // HTML BUTTON
    buttonSignUp.setAttribute("id", "buttonSignUp");
    buttonSignUp.setAttribute("class", "btn btn-success text-white p-2");
    buttonSignUp.textContent = "Inscription";

    divGroup.append(buttonSignIn, buttonSignUp); // Ajout des bouttons de contrôle à l'intérieur la div

    articleElement.append(divGroup); // Ajout du titre et de la liste dans l'article

    addEventButton(buttonSignIn, buttonSignUp);
    document.body.insertBefore(articleElement, title.nextSibling);
  }
}

/***************************** PAGE INSCRIPTION **************************/
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

          /* Pour faire la verification des Regex avec PHP décommenter cette ligne et celle qui la termine

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

          Fin de commentaire RegEx PHP */

          // RegEx avec Javascript // Commenté le code suivant dans le cas ou la vérification ce ferai avec PHP
          const res = validateInput(event.target.name, event.target.value);
          addAndCleanErrorHtmlMessage(event.target.name, res);
        }
      );
    }
  }
};

// IsStringToArray
// Vérifier chaque élément du tableau avec every
// Si un valeur est de type object
// return false sinon return true pour continuer
Array.prototype.IsStringToArray = function () {
  const result = this.every((element) => {
    if (typeof element === "object") return false;

    return true;
  });

  return result === false ? false : true;
};

async function submitForm(e) {
  e.preventDefault();

  console.log(e);
  const form = new FormData(this);
  //Reprendre ici
  const regEx = Array.from(form).map(([key, val], index) => {
    const res = validateInput(key, val);
    if (res !== true) addAndCleanErrorHtmlMessage(key, res);
    return res;
  });

  if (regEx.IsStringToArray() === false) {
    console.error("erreur");
  } else {
    console.log("ok");
    const res = await postJs({
      bodyParam: { action: "addUser" },
      route: "jsPhp.php",
      idForm: "form-inscription",
    });
    // Si le membre est ajouté avec succées php return true
    if (res) {
      this.reset(); // reset le formulaire
      // Redirection vers la connection
      window.location.replace(
        `https://${window.location.hostname}/jour-5/job-01/connexion.php`
      );
    }
  }
}

/***************************** PAGE CONNEXION **************************/
async function submitConnectForm(e) {
  e.preventDefault();

  const res = await postJs({
    bodyParam: { action: "connectUser" },
    route: "jsPhp.php",
    idForm: "form-connexion",
  });

  // Si la reponse est true
  if (res) {
    window.location.replace(
      `https://${window.location.hostname}/jour-5/job-01/`
    );
  } else {
    // Sinon on gére l'erreur de connection ici
    console.error("Ooops login inncorrect");
  }
}

/***************************** CONDITION DE COTROLE DE NAVIGUATION **************************/
// initialise la fonction si le document à était chargée complétement
// Si l'adresse de la page est index.php ou /
if (document.getElementById("title")) {
  console.log("title");
  initProject();
} else if (document.getElementById("title-SignIn")) {
  console.log("title-SignIn");
  document
    .getElementById("form-connexion")
    ?.addEventListener("submit", submitConnectForm);
} else if (document.getElementById("title-signUp")) {
  //addEventListener("focusout", (event) => {});
  console.log("title-signUp");
  const elementForm = document.getElementById("form-inscription");
  elementForm.addEventListener("submit", submitForm);
  loadForm();
}
