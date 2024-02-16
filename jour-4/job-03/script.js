const selectList = document.getElementById("type");
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

//  Function qui va créer le tableau des types de pockémon par rapport à la list en éxcluant ceux déjà ajouté
let typeSelect = [];
const reposneA = resultJson();
reposneA.then((data) => {
  const filterType = data.map((item, index) => {
    item.type.map((element) => {
      let isElement = false;
      // console.log(element);
      typeSelect.forEach((elementSelect) => {
        if (elementSelect == element) {
          isElement = true;
        }
      });
      !isElement ? typeSelect.push(element) : "";
    });
  });
  console.log(typeSelect);
});
