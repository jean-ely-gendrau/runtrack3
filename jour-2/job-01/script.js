const element = document.getElementById("citation");
const button = document.getElementById("button");

if (element && button) {
  const printConsole = () => {
    return console.log(element.textContent);
  };

  button.addEventListener("click", printConsole);
}
