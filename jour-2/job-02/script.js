const button = document.getElementById("button");

if (button) {
  const printConsole = () => {
    const element = document.getElementById("citation");
    if (element) {
      /* Insére code display none here */
    } else {
      const article = document.createElement("article");
      article.setAttribute("id", "citation");
      article.innerText =
        "L'important n'est pas la chute, mais l'atterrissage.";
      document.body.prepend(article);
    }
  };

  button.addEventListener("click", printConsole);
}
