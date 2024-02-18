const inputId = document.getElementById("id");
const inputName = document.getElementById("nom");
const selectList = document.getElementById("type");
const button = document.getElementById("filtre");

const selectOptions = [
  "Grass",
  "Poison",
  "Fire",
  "Flying",
  "Water",
  "Bug",
  "Normal",
  "Electric",
  "Ground",
  "Fairy",
  "Fighting",
  "Psychic",
  "Rock",
  "Steel",
  "Ice",
  "Ghost",
  "Dragon",
];
selectOptions.forEach((element) => {
  let options = document.createElement("option");
  options.setAttribute("value", element);
  options.textContent = element;
  selectList.append(options);
});

const resultJson = async () => {
  try {
    const response = await fetch(
      `http://${window.location.hostname}/jour-4/job-03/pokemon.json`
    );
    const response_1 = await response.json();

    return response_1; // return reponse json
  } catch (error) {
    return `Erreur : ${error}`; // Erreur
  }
};

function accordionBS5(id, elementAtAccordion, title) {
  const divElement = document.createElement("div");
  const divItem = document.createElement("div");
  const divCollaps = document.createElement("div");
  const divBody = document.createElement("div");
  const h2Element = document.createElement("h2");
  const buttonElement = document.createElement("button");

  // Définission des attribut à l'élément parent et enfant
  divElement.setAttribute("id", `accordion-${id}-${title.substring(0, 5)}`);
  divElement.setAttribute("class", "accordion");
  divItem.setAttribute("class", "accordion-item");

  // Définission des attribut à l'élément h2 et button - ajout de l'élément button dans le h2
  h2Element.setAttribute("class", "accordion-header");
  buttonElement.setAttribute("class", "accordion-button");
  buttonElement.setAttribute("type", "button");
  buttonElement.setAttribute("data-bs-toggle", "collapse");
  buttonElement.setAttribute("data-bs-target", `#collaps${id}`);
  buttonElement.setAttribute("aria-expanded", "true");
  buttonElement.setAttribute("aria-controls", `collaps${id}`);
  buttonElement.textContent = title;
  h2Element.appendChild(buttonElement);

  // Définission des attribut à l'élément collapse et accordion body
  // Ajout de elementAtAccordion dans l'élément accordion body
  // Ajout de l'élément précedant dans la collapse balise
  divCollaps.setAttribute("id", `collaps${id}`);
  divCollaps.setAttribute(
    "class",
    `accordion-collapse collapse ${id === 0 ? "show" : id === 1 ? "show" : ""}`
  );
  divCollaps.setAttribute(
    "data-bs-parent",
    `accordion-${id}-${title.substring(0, 5)}`
  );
  divBody.setAttribute("class", "accordion-body");
  divBody.appendChild(elementAtAccordion);
  divCollaps.append(divBody);

  // Ajout de tout les élément dans le accordion item
  divItem.append(h2Element, divCollaps);
  divElement.appendChild(divItem);

  return divElement;
  document.body.appendChild(divElement);
}

function createArticleAcordion({ id, title, textParagraph }) {
  // ARTICLE
  const articleElement = document.createElement("article");
  articleElement.setAttribute("id", `article-${id}`);

  // H3 ELEMENT
  const h3Element = document.createElement("h3");
  h3Element.textContent = title;

  const paragraphe = document.createElement("p"); // PARAGRAPHE
  paragraphe.textContent = textParagraph;

  articleElement.append(h3Element, paragraphe); // Ajout des éléments dans la balise article.

  return articleElement; // Return l'élément HTML
}

function createArticle({ id, dataObject }) {
  const { id: itemID, name, type, base } = dataObject;

  // ARTICLE
  const articleElement = document.createElement("article");
  articleElement.setAttribute("id", `article-${id}`);

  // H3 ELEMENT
  const h3Element = document.createElement("h3");
  h3Element.textContent = name.french;

  // Transformation de l'object name en chaîne de caractère
  const stringNames = Object.entries(name).join(" - ").toString();

  const paragraphe = document.createElement("p"); // PARAGRAPHE
  paragraphe.textContent = `Nom du pokémon international : ${stringNames}`;

  // CAPTION de la table avec l'id et le nom en français du pokémon
  const textCaption = document.createTextNode(
    `id du pokémon :${itemID} - ${name.french}`
  );

  const tableElement = createTable(base, textCaption); // Création de la table HTML
  articleElement.append(h3Element, paragraphe, tableElement); // Ajout des éléments dans la balise article.

  return articleElement; // Return l'élément HTML
}

function createTable(element, textCaption) {
  const tableElement = document.createElement("table"); // TABLE
  tableElement.setAttribute(
    "class",
    "table table-sm table-dark w-auto table-striped"
  );
  const tbodyElement = document.createElement("tbody"); // TBODY
  tbodyElement.setAttribute(
    "class",
    "table-group-divider text-warning-emphasis"
  );
  const theadElement = document.createElement("thead"); // THEAD
  const captionElement = document.createElement("caption"); // CAPTION
  captionElement.setAttribute("class", "text-white");

  const rowThead = document.createElement("tr"); // TR THEAD
  const rowTbody = document.createElement("tr"); // TR TBODY

  Object.entries(element).map(([key, val], index) => {
    // DEBUG console.log(key, val);
    const thElement = document.createElement("th");
    const keyText = document.createTextNode(key);
    thElement.appendChild(keyText);
    rowThead.appendChild(thElement);

    const tdElement = document.createElement("td");
    const valText = document.createTextNode(val);
    tdElement.appendChild(valText);
    rowTbody.appendChild(tdElement);
  });

  captionElement.appendChild(textCaption); // CAPTION
  theadElement.appendChild(rowThead); // THEAD
  tbodyElement.appendChild(rowTbody); // TBODY
  tableElement.append(captionElement, theadElement, tbodyElement);
  return tableElement;
}

function errorFilter() {
  alert("aucun pokémon ne correspond à votre recherche.");
}

function filterPokemon() {
  const resultPokemon = resultJson();
  resultPokemon.then((data) => {
    if (
      Number.isInteger(parseInt(inputId.value)) &&
      data.hasOwnProperty(inputId.value - 1)
    ) {
      const keySelect = inputId.value - 1;
      console.log(keySelect);
      const prefixContain = "ContainerId";
      const elementArticle = document.getElementById(
        `article-${prefixContain}`
      );
      const articleElement = createArticle({
        id: prefixContain,
        dataObject: data[keySelect],
      });
      elementArticle
        ? elementArticle.replaceWith(articleElement)
        : document.body.append(articleElement);
    } else if (inputName.value !== "") {
      const objectFilter = data.filter((element) => {
        const returnObjectFilter = element.name.french
          .toString()
          .toLowerCase()
          .includes(inputName.value.toLowerCase())
          ? element
          : "";
        /* DEBUG
        console.log(
          inputName.value.toLowerCase(),
          Object.entries(element.name).join(" ").toString().toLowerCase()
        );
        */
        return returnObjectFilter;
      });

      if (objectFilter.length > 0) {
        const prefixContain = "ContainerId";
        const elementArticle = document.getElementById(
          `article-${prefixContain}`
        );
        const articleElement = createArticle({
          id: prefixContain,
          dataObject: objectFilter[0],
        });
        elementArticle
          ? elementArticle.replaceWith(articleElement)
          : document.body.append(articleElement);
      } else errorFilter();
    } else if (selectList.value !== "") {
      // Filtrage des propriétés de l'object
      // La function return l'object en cours d'itération si celui correspont à la condition
      // Sinon flase
      const returnObjectFilter = data
        .filter((element) => {
          return element.type.toString().includes(selectList.value)
            ? element
            : 0;
        })
        // Map les résultats filtrer
        // Construction des élément HTMl
        // Map retourn un nouveau tableau avec les éléments à insérer dans le Body
        .map((objectFilter) => {
          if (objectFilter !== "") {
            // Création de l'article à insérer dans l'accordion
            const articleElement = createArticle({
              id: objectFilter.id,
              dataObject: objectFilter,
            });

            // Return l'accordion avec les éléments passé en arguments
            return accordionBS5(
              objectFilter.id,
              articleElement,
              objectFilter.name.french
            );
            //document.body.append(articleElement);
          }
        });

      // Article container principle
      // Il est le même pour les 3 recherches de pokémon, id, name ou list
      // Ainsi si il existe il sera remplacer pour néttoyé l'affichage
      const prefixContain = "ContainerId";
      const articleAccordions = createArticleAcordion({
        id: prefixContain,
        title: `La liste des pokèmons ${selectList.value}`,
        textParagraph: `${returnObjectFilter.length} pokémon de type ${selectList.value} ont étaient séléctionnés.`,
      });

      // Tableau des éléments accordion précédament créer
      returnObjectFilter.forEach(
        (elementHtml) => articleAccordions.append(eval(elementHtml)) // On ajoute les accordions éléments html dans l'article crée précédament
      );

      // Sélecteur de container article
      const elementArticle = document.getElementById(
        `article-${prefixContain}`
      );

      // Si l'élément existe dans le DOM
      // On le remplace
      // Sinon on l'ajoute
      elementArticle
        ? elementArticle.replaceWith(articleAccordions)
        : document.body.append(articleAccordions);
    } else errorFilter();
  });
}
button.addEventListener("click", () => filterPokemon());
