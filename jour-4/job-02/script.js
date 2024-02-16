const buttonClick = document.getElementById("button");
const keyText = document.getElementById("keyText");

const jsonData = {
  name: "Toulon",
  address: "Av. Franklin Roosevelt",
  city: "Toulon",
  codePos: "83000",
  creation: "2023",
};

function jsonValueKey(jsonData, id) {
  const jsonParse = JSON.parse(jsonData);
  const key = id ? id : "name";

  if (jsonParse.HasOwnPropetiy(key)) {
    const paragraph = document.createElement("p");
    paragraph.textContent = jsonParse.key;
    document.body.append(paragraph);
  }
}
buttonClick.addEventListener("click", () =>
  jsonValueKey(JSON.stringify(jsonData), keyText.value)
); // Ecouteur d'événement.
