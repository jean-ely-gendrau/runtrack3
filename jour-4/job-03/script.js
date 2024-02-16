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
