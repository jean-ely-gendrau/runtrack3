const inputId = document.getElementById("id");
const inputName = document.getElementById("name");
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
      "http://runtrack3.test/jour-4/job-03/pokemon.json"
    );
    const response_1 = await response.json();

    return response_1; // return reponse json
  } catch (error) {
    return `Erreur : ${error}`; // Erreur
  }
};

function accordionBS5(id, elementAtAccordion, title) {
  const divElement = document.createElement("div");
  const divItem = divElement;
  const divCollaps = divElement;
  const divBody = divElement;
  const h2Element = document.createElement("h2");
  const buttonElement = document.createElement("button");

  // Définission des attribut à l'élément parent et enfant
  divElement
    .setAttribute("id", `accordion-${id}-${title.substring(0, 5)}`)
    .setAttribute("class", "accordion");
  divItem.setAttribute("class", "accordion-item");

  // Définission des attribut à l'élément h2 et button - ajout de l'élément button dans le h2
  h2Element.setAttribute("class", "accordion-header");
  buttonElement
    .setAttribute("class", "accordion-button")
    .setAttribute("type", "button")
    .setAttribute("data-bs-toggle", "collapse")
    .setAttribute("data-bs-target", `#collaps${id}`)
    .setAttribute("aria-expanded", "true")
    .setAttribute("aria-controls", `collaps${id}`);
  buttonElement.textContent = title;
  h2Element.appendChild(buttonElement);

  // Définission des attribut à l'élément collapse et accordion body
  // Ajout de elementAtAccordion dans l'élément accordion body
  // Ajout de l'élément précedant dans la collapse balise
  divCollaps
    .setAttribute("id", `collaps${id}`)
    .setAttribute("class", "accordion-collapse collapse show")
    .setAttribute("data-bs-parent", `accordion-${id}-${title.substring(0, 5)}`);
  divBody.setAttribute("class", "accordion-body");
  divBody.appendChild(elementAtAccordion);
  divCollaps.appendChild(divBody);

  // Ajout de tout les élément dans le accordion item
  divItem.append(h2Element, divCollaps);
  divElement.appendChild(divItem);

  document.body.appendChild(divElement);
}
function filterPokemon() {
  const resultPokemon = resultJson();
  resultPokemon.then((data) => {
    if (inputId && inputName === undefined) {
      console.log(data.filter((element) => selectList));
    } else if (inputName) {
      console.log(data.filter((element) => inputId === element.id));
    } else if (selectList) {
      data.filter((element) => {
        const objectFilter = element.type.toString().includes(selectList.value)
          ? element
          : "";
        if (objectFilter) {
          console.log(element);
          const articleElement = document.createElement("article"); // ARTICLE
          const h3Element = document.createElement("h3"); // H3 ELEMENT
          h3Element.textContent = objectFilter.name.french;

          const paragraphe = document.createElement("p"); // PARAGRAPHE
          paragraphe.textContent = `Nom du pokémon international : ${Object.entries(
            objectFilter.name
          )
            .join(" - ")
            .toString()}`;
          const tableElement = document.createElement("table"); // TABLE
          tableElement.setAttribute(
            "class",
            "table table-sm table-dark w-auto"
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

          Object.entries(objectFilter.base).map(([key, val], index) => {
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

          const valText = document.createTextNode(
            `id du pokémon :${objectFilter.id} - ${objectFilter.name.french}`
          );
          captionElement.appendChild(valText); // CAPTION
          theadElement.appendChild(rowThead); // THEAD
          tbodyElement.appendChild(rowTbody); // TBODY
          tableElement.append(captionElement, theadElement, tbodyElement);
          articleElement.append(h3Element, paragraphe, tableElement);
          document.body.append(articleElement);
        }
      });
    }
  });
}
button.addEventListener("click", () => filterPokemon());
