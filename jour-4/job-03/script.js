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
      const paragraphe = document.createElement("p");
      data.filter((element) => {
        const array = element.type.toString().includes(selectList.value)
          ? element
          : "";
      });
    }
  });
}
button.addEventListener("click", () => filterPokemon());
